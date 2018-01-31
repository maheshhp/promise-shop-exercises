let alwaysThrows = () => {
  throw new Error('OH NOES');
};

let iterate = (argOne) => { console.log(argOne); return argOne + 1; };

let promiseResolver = Promise.resolve(iterate(1));


module.exports = { alwaysThrows, iterate, promiseResolver };
