const Delay = require("../javascriptModules/delay");
const factorial = require("../javascriptModules/factorial");
const {power} = require("../javascriptModules/power");

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