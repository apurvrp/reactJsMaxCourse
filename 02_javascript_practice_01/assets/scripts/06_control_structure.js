// That's function run by browser and open box as popup
const password = prompt("Enter your Password");

if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("Access not granted.");
}

const hobbies = ["Sports", "Cooking"];
for (const hobby of hobbies) {
  console.log("hobby", hobby);
}

// Manipulating the DOM
const list = document.querySelector("ul");
list.remove();
