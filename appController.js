const User = require("./models/User");
const {validationResult} = require("express-validator")

class appController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "User validation error!", errors});
            }
            const {username, password, workspaces} = req.body;
            const candidate = await User.findOne({username});
            if (candidate) {
                return res.status(400).json({message: "Registration error! User already exists"});
            }
            const user = new User({username, password: password, workspaces: workspaces});
            await user.save();
            console.log("User registration completed!");
            return res.json({message: "User registration completed!"})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Registration error"});
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username});
            if (!user) {
                return res.status(400).json({message: `User ${user} not found!`});
            }
            const validPassword = password === user.password;
            if (!validPassword) {
                return res.status(400).json({message: `Password incorrect!`});
            }
            return res.json(user.id);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Login error"});
        }
    }

    async getUserData(req, res) {
        try {
            const id = req.query.id;
            const user = await User.findById(id);
            if (!user) {
                return res.status(400).json({message: `User's data not found!`});
            }
            return res.json(user);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Server error!"});
        }
    }

    async setUserData(req, res) {
        try {
            const {id, newUserData} = req.body;
            const user = await User.findById(id);
            if (!user) {
                return res.status(400).json({message: `User ${user} not found!`});
            }
            user.workspaces = newUserData;
            await user.save();
            return res.json({message: "User's data update!"})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Server error!"});
        }
    }

    async delUser(req, res) {
        try {
            const {id} = req.body;
            const user = await User.findById(id);
            if (!user) {
                return res.status(400).json({message: `User ${user} not found!`});
            }
            await user.deleteOne();
            return res.json({message: "User delete!"})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Server error!"});
        }
    }
}

module.exports = new appController();
