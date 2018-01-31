let alwaysThrows = () => {
  throw new Error('OH NOES');
};

let iterate = (argOne) => { };

let promiseResolver = Promise.resolve(iterate(1));


module.exports = { alwaysThrows, iterate, promiseResolver };
