const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectLocation: { type: String, required: true },
  buildings:{ type: mongoose.Schema.Types.ObjectId, ref:"building"},
  image:{ type: String, trim: true },
});
const project = mongoose.model("project", projectSchema);
module.exports = project;
