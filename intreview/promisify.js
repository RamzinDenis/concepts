function promisify(fn) {
  return function (...args) {
    return new Promise((resolve) => {
      function cb(result) {
        resolve(result);
      }

      fn.apply(this, args.concat(cb));
    });
  };
}

const exampleFn = function (x, y, cb) {
  cb("result");
};

const promisedFn = promisify(exampleFn);

promisedFn(1, 2)
  .then((res) => console.log(res))
  .then();
