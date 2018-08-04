const fs = require("fs");

// fs.rmdir("./assets", function(err) {
//   if (err) {
//     throw err;
//   }
//
//   console.log("Assets Directory Removed");
// });

fs.readdirSync("./logs").forEach(filename => {
  fs.unlinkSync("./logs/" + filename);
});

fs.rmdir("./logs", function(err) {
  if (err) {
    console.log(err);
  }

  console.log("Logs Directory Removed");
});

// fs.renameSync("./assets/logs", "./logs");
//
// console.log("success!");
