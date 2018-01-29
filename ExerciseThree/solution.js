require('es6-promise');

let promiseToReject = new Promise(((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
}));

let onReject = (error) => {
  console.log(error.message);
};

// promiseToReject.then(null, onReject);

module.exports = { promiseToReject, onReject };
