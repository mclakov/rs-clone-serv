const { Schema, model } = require("mongoose");

const WorkspaceModel = new Schema({
    title: {type: String, required: true},
    participants: {type: Array, required: true},
    boards: {type: Array, required: true}
});

module.exports = model("Workspace", WorkspaceModel);
