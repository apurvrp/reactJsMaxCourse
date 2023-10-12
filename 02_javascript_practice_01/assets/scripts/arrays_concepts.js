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
