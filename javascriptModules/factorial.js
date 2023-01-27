
function factorial(x) {
    let result = x;
    for (let i = x - 1; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }

  module.exports = factorial;

 