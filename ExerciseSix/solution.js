let promiseOne = Promise.resolve('SECRET VALUE');


let promiseTwo = new Promise(((fulfill, reject) => {
  reject(new Error('ANOTHER SECRET VALUE'));
}));

let promiseThree = Promise.reject(new Error('ONE MORE SECRET VALUE'));

promiseOne.then(console.log);
promiseTwo.catch(console.log);
promiseThree.then(console.log, console.log);
// module.exports = { promiseOne, promiseTwo, promiseThree };
