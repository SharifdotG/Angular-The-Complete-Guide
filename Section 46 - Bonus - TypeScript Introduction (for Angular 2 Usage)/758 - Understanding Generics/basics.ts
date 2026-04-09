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

// Type aliases

type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: "Sharif",
  age: 25,
};

// Error
// person = {
//   isEmployee: true,
// };

let people: Person[]; // array of objects

// Type inference

let course = "Angular - A Complete Guide";
// course = 12345; // Error

// Union Type

let course2: string | number =
  "Modern HTML & CSS From The Beginning 2.0 Course";

course2 = 1; // No Error

// Function and types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  // Return type: void
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // -1, 1, 2, 3
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
