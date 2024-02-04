// models/todo.js

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: String,
  timestamp: { type: Date, default: Date.now }, // Add a default timestamp value
});

const Todo = mongoose.model("Todo", todoSchema); 

module.exports = Todo;
