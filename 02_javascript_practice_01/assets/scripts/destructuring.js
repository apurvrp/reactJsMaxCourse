// Destructuring Array
const userNameData = ["Max", "Prajapati", "Appy", "Pradhan"];
const [firstName, lastName] = ["Max", "Prajapati", "Appy", "Pradhan"];

console.log("firstName", firstName, "lastName", lastName);

// Destructuring Objects

const { name: userName, age } = {
  name: "Max",
  age: 34,
};
console.log(userName, age);

// Function
function storeOrder(order) {
  localStorage.setItem("id", order.id);
  localStorage.setItem("currency", order.currency);
}

// Function parameters destructuring
function storeOrderNew({ id, currency }) {
  localStorage.setItem("id", id);
  localStorage.setItem("currency", currency);
}
