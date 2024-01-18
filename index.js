
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page",});
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
