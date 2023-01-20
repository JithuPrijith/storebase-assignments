var word = "HELLO WORLD";

function arraysplit(data) {
  let array = data.split("");
  for (let letter of array) {
    return letter;
  }
}

function setDelay(data, i) {
  setTimeout(async () => {
    let res =await arraysplit(data);
    console.log(res);
  }, i * 1000);
}

for (let i = 1; i < 10; i++) {
  setDelay(word, i);
}
