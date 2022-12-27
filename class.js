function User(user) {
  this.user = user;
}

User.prototype.say = "Hi";

const denis = new User({ name: "denis" });

console.log(JSON.stringify(denis));

class Animal {
  name = "animal";
}

class Rabbit extends Animal {
  constructor() {
    super();
    this.name = "rabbit";
  }
}

const rabbit = new Rabbit();

console.log(rabbit.__proto__.__proto__ === Animal.prototype);
