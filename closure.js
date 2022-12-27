const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("I am at index " + i);
    }, 3000);
  })(i);
}

function sum(n) {
  let number = n;

  return function repeater(b) {
    if (!b) return number;

    number += b;
    return repeater;
  };
}

console.log(sum(3)(4)(2)());
