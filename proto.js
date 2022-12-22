const user = {
  name: "Denis",
  surname: "Ramzin",

  set fullname(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullname() {
    return `${this.name} ${this.surname}`;
  },
};

const admin = {
  __proto__: user,
  isAdmin: true,
};

admin.fullname = "Arthur Chemish";

function Rabbit() {}

const rabbit = new Rabbit();

rabbit.constructor.prototype = {
  longEar: true,
};

const longEar = new rabbit.constructor();

// true, undefined
console.log(longEar.longEar, longEar.eats);

function User() {}

User.prototype = {
  name: "Denis",
};

const denis = new User();

console.log(denis.name, denis.constructor === User);
