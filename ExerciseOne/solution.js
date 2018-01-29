let printToConsole = (callbackFn) => {
  setTimeout(() => { console.log(process.argv[0]); callbackFn(); }, 300);
  // setTimeout(() => console.log('TIMED OUT!'), 300);
};
// printToConsole();
module.exports = printToConsole;
