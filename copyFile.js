// method 1

const fs = require("fs");

function copyFile(src, dest) {
  fs.copyFile(src, dest, callback);
}

function callback() {
  console.log("sucess");
}

copyFile("copyFile.js", "textDest.txt");

// method 2

function copyFile2(src, dest) {
  fs.cp(src, dest, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("success");
    }
  });
}


copyFile2("copyFile.js", "textDest.txt");
