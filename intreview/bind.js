Function.prototype.bind = function (context) {
  const _this = this;

  return () => {
    _this.call(context);
  };
};

const foo = function () {
  console.log(this.bar);
};

let baz = foo.bind({ bar: "hello" });
baz();
