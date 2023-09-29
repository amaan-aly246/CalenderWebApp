const User = require('../models/User');
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const { username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        })
        res.status(201).json(userDoc)
    } catch (error) {
        res.status(404).json(error);
        console.log('error', error);
    }

}

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { register, login };


