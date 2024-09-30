const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Blog schema
const blogSchema = new Schema({
  "title": String,
  "content": String,
  "author": String,
  "year": Number
});

// Create the Blog model
const Blog = mongoose.model("Blog", blogSchema);

// Export the Blog model
module.exports = Blog;
