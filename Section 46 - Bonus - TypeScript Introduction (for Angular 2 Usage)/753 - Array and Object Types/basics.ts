// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 12;
age = 20.1;
// age = "21"; Error

let userName: string;
userName = "Sharif";

let isCold: boolean;
isCold = false;

// let hobbies: null;
// hobbies = 12; Error

// More complex types

let hobbies: string[];
hobbies = ["Gaming", "Programming", "Gym"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "Sharif",
  age: 25,
};

// Error
// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[]; // array of objects
