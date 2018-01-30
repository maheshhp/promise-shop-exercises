let attachTitle = arg => `DR. ${arg}`;
let fulfilledPromise = new Promise(resolve => resolve('MANHATTAN'));

module.exports = { attachTitle, fulfilledPromise };

// fulfilledPromise.then(attachTitle).then(console.log);
