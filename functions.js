// types of functions

// 1) Function decleration

function add(a, b) {
  return a + b;
}
add(5, 10);

// 2) Function Expression - can be called before decleration (hoisting)

const add1 = function (a, b) {
  return a + b;
};
add1(1, 7);

// 3) arrow function
const add3 = (a, b) => {
  return a + b;
};
add3(5, 7);

// function calculate(x, y) {
//   var xfact = 1;
//   for (let i = 1; i <= x; i++) {
//     xfact = xfact * i;
//   }

//   var xPowerY = x;
//   for (let i = 1; i < y; i++) {
//     xPowerY = xPowerY * x;
//   }

//   var yPowerX = y;
//   for (let i = 1; i < x; i++) {
//     yPowerX = yPowerX * y;
//   }

//   return xfact + xPowerY + yPowerX;
// }

// console.log(decoupling(5, 3));



// Function to find factorial of a number
const factorial = (x) => {
  let result = x;
  for (let i = x - 1; i >= 1; i--) {
    result = result * i;
  }
  return result;
};

// function to find power of a number
const power = (x, y) => {
  let result = x;
  for (let i = 1; i < y; i++) {
    result = result * x;
  }
  return result;
};

const calculate = (x, y) => {
  let xFact = factorial(x);
  let yFact = factorial(y);
  let XPowerY = power(x, y);
  let YpowerX = power(y, x);
  return xFact + yFact + XPowerY + YpowerX;
};
console.log(calculate(5, 3));
