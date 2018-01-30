let firstFn = () => {
  let firstPromise = new Promise((resolve, reject) => {
    resolve('Some secret');
  });
  return firstPromise;
};

let secondFn = (value) => {
  let secondPromise = new Promise((resolve, reject) => {
    resolve(value);
  });
  return secondPromise;
};

module.exports = { firstFn, secondFn };
