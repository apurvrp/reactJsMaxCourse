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

function greeterNew(greetFn) {
  greatFn();
}

greeterNew(() => console.log("function pass as value"));

function initialFn() {
  function gretafn() {
    console.log("function inside function");
  }
  gretafn(); // you exicute here not outside to this function
}
initialFn();
