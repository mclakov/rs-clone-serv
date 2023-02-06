const User = require("./models/User");

class appController {
    async reg(req, res) {
        try {

        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Registration error"})
        }
    }

    async login(req, res) {
        try {

        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Login error"})
        }
    }

    async getUsers(req, res) {
        try {

        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Server error"})
        }
    }
}

module.exports = new appController();
