// =========================================================================

// Arrow Functions

(userName, message) => {
  console.log("Arrow Functions");
  return userName + message;
};

export default (useName, message) => {
  console.log("Hello");
  return userName + message;
};

// Objects and Classes
const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello");
    console.log(this.age);
  },
};

console.log(user.name, user.age);
user.greet();

// Classes
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("manuel", 35);
console.log(user1);
user1.greet();
