// default parameters

let add = (num1 = 10, num2 = 20) => {
  console.log(num1, num2);
};

console.log(add());

// template literals, multistring
let name = "prijith";
console.log(`my name is ${name}`);

// destructuring -array
let words = ["hai", "hello"];
let [a, b] = words;
console.log(a, b);

// destructuring - object
let data = { name1: "prijith", age: "25" };
let { name1, age } = data;
console.log(name1, age);

// promises
var promise = new Promise((resolve, reject) => {
  console.log("inside promise");
  resolve();
}).then(() => {
  console.log("then");
});
// promise pending will work before then because then is a callback it takes time
console.log(promise);

//
