require('es6-promise');

let multiPromise = new Promise(((resolve, reject) => {
  resolve('PROMISE VALUE');
}));

let onResolve = () => {
  console.log('MAIN PROGRAM');
};

// multiPromise.then(console.log);
// onResolve();

module.exports = { multiPromise, onResolve };
