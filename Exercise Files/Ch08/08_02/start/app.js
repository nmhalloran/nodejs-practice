const express = require("express");

let app = express();

app.use(function(req, res, next) {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use(express.static("./public"));

app.listen(3001);

console.log("Express app running on port 3001");

module.exports = app;
