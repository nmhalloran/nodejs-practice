const fs = require("fs");
const path = require("path");

fs.readdir("./lib", function(err, files) {
  files.forEach(function(filename) {
    let file = path.join(__dirname, "lib", filename);
    let stats = fs.statSync(file);
    if (stats.isFile() && filename !== ".DS_Store") {
      fs.readFile(file, "UTF-8", function(err, contents) {
        console.log(contents);
      });
    }
  });
});

// fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents) {
//   if (err) {
//     console.log(err);
//   }
//
//   console.log(contents);
// });
