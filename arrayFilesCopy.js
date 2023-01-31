var fs = require("fs");
const path = require("path");

function copyFile(src, dest) {
  let srcPath = path.join(__dirname + "/" + src);
  let destPath = path.join(__dirname + "/" + dest);
  return new Promise((resolve, reject) => {
    try {
      fs.cp(srcPath, destPath, (err) => {
        err ? reject(err) : resolve("success");
      });
    } catch (error) {
      reject(error);
    }
  });
}

// Promise.all([
//   copyFile("sourceDir/hai.js", "destDir/hai.js"),
//   copyFile("sourceDir/hello.js", "destDir/hello.js"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err, "err"));

// let sourceArray = ["sourceDir/hai.js", "sourceDir/hello.js"];
// let destArray = ["destDir/hai.js", "destDir/hello.js"];

// All settled
var promise = [
  copyFile("sourceDir/hai.js", "destDir/hai.js"),
  copyFile("sourceDir/hello.js", "destDir/hello.js"),
];

Promise.allSettled(promise)
  .then((res) => console.log(res))
  .catch((err) => console.log(err, "err"));
