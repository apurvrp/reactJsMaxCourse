console.log(apiKeys);

// Variables and Values

console.log("Hello World"); // Here Hello World is Value

// Variables defines var, let, const in javascript

let userMsg = "dummy message";

useMsg = "New dummy messages"; // we reassign value in let variable

const userMessage = "Hello World"; // Variables
// but in while use const variable we can not reassign value

console.log(userMessage, userMsg);

// =======================================================================================

// Operators
// +, *, -, /, ==, ===

// =======================================================================================

// Functions

// Example 1
function testData(userName, message) {
  console.log("dasdas");
}
testData("Max", "Hello");

function testData1(userName, message = "Hello") {
  console.log("dasdas");
}
testData1("Max");

// Note :: function must have only return statement
// Function without return "undefined"

// Example 2
function createGreeting(userName, message = "Hello") {
  return "Hi, I'm " + useName + ". " + message;
}

const greeting1 = createGreeting("Max", "Hello, What's up");
console.log(greeting1);

const greeting2 = createGreeting("Max");
console.log(greeting2);

// Example 3
function combine(a, b, c) {
  return (a * b) / c;
}

const resultData = combine(2, 10, 5);
console.log(resultData);
