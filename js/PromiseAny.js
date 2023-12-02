MyPromise.any = function (promises) {
  return new Promise((resolve, reject) => {
    promises = Array.isArray(promises) ? promises : [];
    const len = promiseArr.length;
    const errs = [];
    promiseArr.forEach((promise) => {
      promise.then(
        (val) => {
          resolve(val);
        },
        (err) => {
          len = len - 1;
          errs.push(err);
          if (len === 0) {
            reject(new AggregateError(errs));
          }
        }
      );
    });
  });
};
