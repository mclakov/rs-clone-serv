const { Schema, model } = require("mongoose");

const UserModel = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    workspaces: {type: Array, required: true},
    settings: {type: Object, required: true}
});

module.exports = model("User", UserModel);
