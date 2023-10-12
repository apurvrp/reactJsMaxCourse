const hobbies = ["Sports", "Cookies"];
const user = {
  name: "Max",
  age: 34,
};

const newHobbies = ["Reading"];
const mergHobbies = [...hobbies, ...newHobbies];
console.log("mergeHobbies", mergeHobbies);

const newExtendedUser = { isAdim: true, ...user };
console.log("newExtendedUser", newExtendedUser);
