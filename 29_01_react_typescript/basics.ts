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
