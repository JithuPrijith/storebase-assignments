// Delay a task 3000ms by async await

async function makeDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}
async function hello() {
  await makeDelay();
  console.log("print after delay");
}

hello();


// decoupling using async and await

function factorial(x) {
  let result = x;
  for (let i = x - 1; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

function power(x, y) {
  let result = x;
  for (let i = 1; i < y; i++) {
    result = result * x;
  }
  return result;
}

function Delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

async function calculate(x, y) {
  await Delay();
  let fact1 = factorial(x);
  console.log(fact1);
  await Delay();
  let fact2 = factorial(y);
  console.log(fact2);
  await Delay();
  let power1 = power(x, y);
  console.log(power1);
  await Delay();
  let power2 = power(y, x);
  console.log(power2);
  return fact1 + fact2 + power1 + power2; //how to send this data without using then ...????
}

calculate(5, 5).then((res) => console.log(res));
