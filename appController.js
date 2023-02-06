const User = require("./models/User");

class appController {
    async reg(req, res) {
        try {
            const {username, password, workspaces} = req.body;
            const candidate = await User.findOne({username});
            if (candidate) {
                return res.status(400).json({message: "Registration error! User already exists"});
            }
            const user = new User({username, password: password, workspaces: workspaces});
            await user.save();
            return res.json({message: "User registration completed!"})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Registration error"});
        }
    }

    async login(req, res) {
        try {

        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Login error"});
        }
    }

    async getUsers(req, res) {
        try {

        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Server error"});
        }
    }
}

module.exports = new appController();
