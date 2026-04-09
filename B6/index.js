const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Hello from Express 🚀",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
