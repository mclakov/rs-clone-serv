const { Schema, model } = require("mongoose");

const User = new Schema({
    USER_NAME: {type: String, unique: true, required: true},
    USER_PASSWORD: {type: String, required: true},
    USER_WORKSPACES: {type: Array, required: true},
});

module.exports = model(("User", User));
