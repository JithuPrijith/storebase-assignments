function setDelay(word, setDelayCallback) {
  word = sliceWord(word);
  if (word != "") {
    setTimeout(() => {
      setDelayCallback(word, setDelayCallback);
    }, 1000);
  }
}

function sliceWord(word) {
  console.log(word[0]);
  word = word.slice(1);
  return word;
}

function setDelayCallback(data, callback) {
  setDelay(data, callback);
}

console.log(setDelay("hello world", setDelayCallback));
