let printToConsole = (callbackFn) => {
  setTimeout(() => { console.log(process.argv[0]); callbackFn(); }, 300);
};
module.exports = printToConsole;
