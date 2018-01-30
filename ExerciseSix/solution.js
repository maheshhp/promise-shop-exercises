

let promiseOne = Promise.resolve('SECRET VALUE');


let promiseTwo = new Promise(((fulfill, reject) => {
  reject(new Error('ANOTHER SECRET VALUE'));
}));

let promiseThree = Promise.reject(new Error('ONE MORE SECRET VALUE'));

module.exports = { promiseOne, promiseTwo, promiseThree };
