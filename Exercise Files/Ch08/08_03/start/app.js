var express = require("express");
var cors = require("cors");
var app = express();

let skierTerms = [
  {
    term: "Rip",
    defined: "To move at a high rate of speed"
  },
  {
    term: "huck",
    defined:
      "To throw your body off of something, usually a natural feature like a cliff"
  },
  {
    term: "Chowder",
    defined: "Powder after it has been sufficiently skied"
  }
];

app.use(function(req, res, next) {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
  res.json(skierTerms);
});

app.listen(3001);

console.log("Express app running on port 3000");

module.exports = app;
