// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//     isEmployee:true;
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide";
// course = 1234;

// Union Types

let courses: string | number = "React - The Complete Guide";
courses = 1234;

// Understanding type aliases
type Person = {
  name: string;
  age: number;
};

let persona: Person;

// Functions & types
function add(a: number, b: number) {
  return a + b;
}

function printOutPut(value: any) {
  console.log(value);
}

// Generics
// function insertAtBeginning(array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray;
// }

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
