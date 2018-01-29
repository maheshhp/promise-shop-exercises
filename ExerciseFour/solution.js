require('es6-promise');

let multiPromise = new Promise(((fulfill, reject) => {

}));

let onReject = (error) => {
  console.log(error.message);
};

module.exports = { multiPromise, onReject };
