function Delay(callback, ...args) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback(...args));
    }, 2000);
  });
}

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

function calculate(x, y) {
  return new Promise((resolve) => {
    let sum = {};
    return Delay(factorial, x)
      .then((res) => {
        console.log(res);
        sum.fact1 = res;
        return Delay(factorial, y);
      })
      .then((res) => {
        console.log(res);
        sum.fact2 = res;
        return Delay(power, x, y);
      })
      .then((res) => {
        console.log(res);
        sum.power1 = res;
        return Delay(power, y, x);
      })
      .then((res) => {
        console.log(res);
        sum.power2 = res;
        resolve(sum.fact1 + sum.fact2 + sum.power1 + sum.power2);
      });
  }).then((sum) => {
    console.log(sum);
  });
}

calculate(5, 4);
