const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const taskSchema = new Schema({
  task: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = Tasks = mongoose.model("tasks", taskSchema);
