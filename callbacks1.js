function callback(word) {
  for (let i = 0; i < word.length; i++) {
    setTimeout(() => {
      console.log(word[i]);
    }, 2000 * i);
  }
}

function printCharecterAfterDelay(word, callback) {
  callback(word);
}

printCharecterAfterDelay("hello world", callback);
