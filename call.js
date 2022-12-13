const wizard = {
  name: "Merlin",
  health: 50,
  heal(num1, num2) {
    return (this.heal += num1 + num2);
  },
};

const archer = {
  name: "Robin hood",
  health: 30,
};

// borrowing methods
wizard.heal.call(archer, 50, 30);

// changes this
wizard.heal.bind(archer, 50, 30)();

function multiPly(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);

// 8
multiplyByTwo(4);
