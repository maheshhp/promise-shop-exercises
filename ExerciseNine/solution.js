let parsePromised = jsonArg => new Promise((resolve, reject) => {
  try {
    console.log(jsonArg);
    resolve(JSON.parse(jsonArg));
  } catch (e) {
    reject(new Error('Parse error'));
  }
});
module.exports = { parsePromised };
