require('es6-promise');

let promiseToReject = new Promise(((fulfill, reject) => {

}));

let onReject = (error) => {
  console.log(error.message);
};

module.exports = { promiseToReject, onReject };
