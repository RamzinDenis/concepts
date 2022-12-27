function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    if (current > to) return;
    console.log(current);
    current++;
    setTimeout(go, 1000);
  }, 1000);
}

printNumbers(1, 10);
