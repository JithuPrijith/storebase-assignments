function delay(word, callback) {
  setTimeout(() => {
    callback(word);
  }, 2000);
}

delay("h", (word) => {
  console.log(word);
  delay("e", (word) => {
    console.log(word);
    delay("l", (word) => {
      console.log(word);
      delay("l", (word) => {
        console.log(word);
        delay("0", (word) => {
          console.log(word);
        });
      });
    });
  });
});
