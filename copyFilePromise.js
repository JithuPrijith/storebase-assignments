const fs = require("fs");

function copyFile(src, dest) {
  return new Promise((resolve, reject) => {
    fs.cp(src, dest, (error) => {
      error ? reject(error) : resolve("success");
    });
  });
}

copyFile("copyFile.js", "textDest.txt")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
