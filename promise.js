//  print hello world promise

function delay(word) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(word);
    }, 2000);
  });
}

delay("h")
  .then((word) => {
    console.log(word);
    return delay("e");
  })
  .then((word) => {
    console.log(word);
    return delay("l");
  })
  .then((word) => {
    console.log(word);
    return delay("l");
  })
  .then((word) => {
    console.log(word);
    return delay("0");
  });
