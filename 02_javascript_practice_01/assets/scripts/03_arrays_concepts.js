// Array concepts
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

// Push method
hobbies.push("working");
console.log(hobbies);

// Find index method
const indexId = hobbies.findIndex((item) => {
  return item === "Sports";
});
const indexId1 = hobbies.findIndex((item) => item === "Sports");
console.log(indexId);

// Map method
const mappingData = hobbies.map((item) => {
  return item + "!";
});
console.log(mappingData);

const mappingObj = hobbies.map((item) => ({ text: item }));
console.log(mappingObj);

// Reduce

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
  console.log("aaa", accumulator, currentValue);
  return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitial);
