//Initial server setup.

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const categories = require("./Data/Category/categories.json");
const allcourse = require("./Data/All Course/All Course.json");
const blogs = require("./Data/Blogs/Blog.json");

app.get("/", (req, res) => {
  res.send("E- Pathshala server running...");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(allcourse);
});

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_course = allcourse.filter((c) => c.id === id);
  res.send(category_course);
});

app.listen(port, () => {
  console.log("server listening on port:", port);
});
