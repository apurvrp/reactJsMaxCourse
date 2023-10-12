// Function as value

function handlerTimeout() {
  console.log("Timed out!");
}

const handlerTimeout2 = () => {
  console.log("Timed out ... again!");
};

setTimeout(handlerTimeout, 2000);
setTimeout(handlerTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out...");
}, 4000);

function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log("Hi"));
