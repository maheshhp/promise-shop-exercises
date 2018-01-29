require('es6-promise');

let multiPromise = new Promise(((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
}));

let onReject = (error) => {
  console.log(error.message);
};

// multiPromise.then(console.log, onReject);

module.exports = { multiPromise, onReject };
