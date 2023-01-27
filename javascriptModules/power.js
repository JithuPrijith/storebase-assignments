function power(x, y) {
    let result = x;
    for (let i = 1; i < y; i++) {
      result = result * x;
    }
    return result;
  }


  module.exports = {
    power
  };