const User = require("./models/User");
const Workspace = require("./models/Workspace");
const {validationResult} = require("express-validator")

class appController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "User validation error!", errors});
            }
            const {username, password, workspaces, settings} = req.body;
            const candidate = await User.findOne({username});
            if (candidate) {
                return res.status(400).json({message: "Registration error! User already exists"});
            }
            const user = new User({username, password: password, workspaces: workspaces, settings: settings});
            user.workspaces.forEach((workspace) => {
                workspace.WORKSPACE_PS[0] = username;
                const userWorkspace = new Workspace({
                    id: workspace.WORKSPACE_ID,
                    title: workspace.WORKSPACE_TITLE,
                    participants: workspace.WORKSPACE_PS,
                    boards: workspace.WORKSPACE_BOARDS,
                    settings: workspace.WORKSPACE_SETTINGS
                });
                userWorkspace.save();
            })
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
            console.log("user.id = ", user.id);
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
            const workspaceArr = await Workspace.find();
            user.workspaces = workspaceArr
                .filter((ws) => {
                    return ws.participants.includes(user.username)
                })
                .map((ws) => {
                    return {
                        WORKSPACE_ID: ws.id,
                        WORKSPACE_TITLE: ws.title,
                        WORKSPACE_PS: ws.participants,
                        WORKSPACE_BOARDS: ws.boards,
                        WORKSPACE_SETTINGS: ws.settings
                    }
                })
            const userParticipants = await User.find();
            user.settings.USER_PARTICIPANTS = userParticipants
                .map(userObj => {
                    return {
                        PARTICIPANT_NAME: userObj.username,
                        PARTICIPANT_LOGO: userObj.settings.USER_LOGO
                    }
                })
                .filter(userObj => userObj.PARTICIPANT_NAME !== user.username);
            return res.status(200).json(user);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Server error!"});
        }
    }

    async setParticipants(req, res) {
        try {
            const {idWorkspace, nameParticipant, act} = req.body;
            const workspaces = await Workspace.find();
            let workspace = null;
            workspaces.forEach(ws => {
                if (ws.id === idWorkspace) {
                    workspace = ws;
                }
            });
            console.log("workspace", workspace);
            if (!workspace) {
                return res.status(400).json({message: `Workspace not found!`});
            }
            if (act === "add") {
                if (workspace.participants.includes(nameParticipant)) {
                    return res.status(400).json({message: `Server error! User already exists`});
                } else {
                    const newWorkspace = await Workspace.findById(workspace._id);
                    newWorkspace.participants.push(nameParticipant);
                    newWorkspace.save();
                    return res.status(200).json({message: "User's data update!"});
                }
            }
            if (act === "del") {
                if (!workspace.participants.includes(nameParticipant)) {
                    return res.status(400).json({message: `Server error! User not found`});
                } else {
                    const newWorkspace = await Workspace.findById(workspace._id);
                    const index = workspace.participants.findIndex(part => part === nameParticipant);
                    newWorkspace.participants.splice(index, 1);
                    newWorkspace.save();
                    return res.status(200).json({message: "User's data update!"});
                }
            }
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
            const workspaces = await Workspace.find();
            workspaces.forEach(ws => {
                user.workspaces.forEach(async w => {
                    if (w.WORKSPACE_ID === ws.id) {
                        let newWorkspace = await Workspace.findById(ws._id);
                        newWorkspace.id = w.WORKSPACE_ID;
                        newWorkspace.title = w.WORKSPACE_TITLE;
                        newWorkspace.participants = w.WORKSPACE_PS;
                        newWorkspace.boards = w.WORKSPACE_BOARDS;
                        newWorkspace.save();
                    }
                });
            });
            await user.save();
            return res.status(200).json({message: "User's data update!"})
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
            return res.status(200).json({message: "User delete!"})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Server error!"});
        }
    }
}

module.exports = new appController();
