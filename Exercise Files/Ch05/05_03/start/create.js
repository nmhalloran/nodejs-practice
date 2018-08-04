const fs = require("fs");

let md = `
Create Subtitle Markdown
=====================

Sample subtitle
----------------

* point
* point
* point

`;

fs.writeFile("sample.md", md.trim(), function(err) {
  console.log("File Created");
});
