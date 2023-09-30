const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.ACCESS_SECRET_TOKEN

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
        const passOk = bcrypt.compareSync(password, user.password)
        if (user && passOk) {
            const token = jwt.sign({ username, id: user._id }, secret)
            res.cookie('token', token).status(200).json({ message: 'Login successful' });

        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const accessToken = async (req, res) => {
    const { token } = req.cookies;
    try {
        const info = jwt.verify(token, secret)
        res.json(info);
    } catch (error) {
        console.log(error);
    }
}

const logOut = async ( req, res )=>{
  res.cookie('token', '').status(200).json({message: "logout successful"});
}

module.exports = { register, login, accessToken , logOut };


