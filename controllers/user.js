const User = require("../models/User");
const generateToken = require('../utils/genrateToken');
exports.register = async(req, res) => {
    const { fullName, email, password, role } = req.body;
    try {
        const user = await User.create({ fullName, email, password, role });
        res.status(201).json({
            user: user,
            token: generateToken(user._id, user.role)
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
exports.login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "بينات الدخول خطاء"
            })
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(404).json({
                message: "بينات الدخول خطاء"
            })
        }
        res.status(201).json({
            user: user,
            token: generateToken(user._id, user.role)
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}