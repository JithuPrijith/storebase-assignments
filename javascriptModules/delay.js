 function Delay(callback, ...args) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(callback(...args));
      }, 2000);
    });
  }

 module.exports = Delay;
//  using the module library to export to other file; 