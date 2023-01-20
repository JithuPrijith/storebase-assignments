// blocking operation

var fs = require("fs");

var data = fs.readFileSync("text.txt");
console.log(data);
console.log("hai");

// non blocking operation
fs.readFile("text.txt", (error, data) => {
  if (error) {
    console.log(error, "er");
  }
  console.log(data);
});
console.log("hai");
