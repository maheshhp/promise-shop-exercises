let alwaysThrows = () => {
  throw new Error('OH NOES');
};

let iterate = (argOne) => { console.log(argOne); return argOne + 1; };

let promiseResolver = Promise.resolve(iterate(1));

promiseResolver.then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, error => console.log(error.message));

module.exports = { alwaysThrows, iterate, promiseResolver };
