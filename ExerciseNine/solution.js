let parsePromised = jsonArg => new Promise((resolve, reject) => {
  try {
    // console.log(jsonArg);
    resolve(JSON.parse(jsonArg));
  } catch (e) {
    // reject(e.message);
    reject(new Error('Parse error'));
  }
});
// parsePromised(process.argv.slice(2)).then(null, console.log);
module.exports = { parsePromised };
