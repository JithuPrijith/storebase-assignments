// using callback
function wait3000(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
    }, 3000);
  });
}

wait3000(() => {
  console.log("waited and worked");
});

//  using then
function wait4000() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

wait4000().then(() => {
  console.log("waited 4000");
});
