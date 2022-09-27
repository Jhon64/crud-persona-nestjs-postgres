const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");

// Serve static files

app.use(express.static(__dirname + "/dist"));
app.use(morgan("dev"));
// Send all requests to index.html
app.get("/*", function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname + "/dist/main.js"));
});

// default Heroku port
app.listen(process.env.PORT || 5000, function () {
  console.log(__dirname);
  console.log("http://localhost:5000");
});