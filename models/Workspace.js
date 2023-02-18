const { Schema, model } = require("mongoose");

const WorkspaceModel = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    participants: {type: Array, required: true},
    boards: {type: Array, required: true},
    settings: {type: Object, required: true}
});

module.exports = model("Workspace", WorkspaceModel);
