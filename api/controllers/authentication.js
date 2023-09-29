const User = require('../models/User');

const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userDoc = await User.create({
            username,
            password
        })
        res.status(201).json(userDoc)
    } catch (error) {
        res.status(404).json(error);
        console.log('error', error);
    }

}

module.exports = register