"use strict";
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
// Primitives
let age = 12;
age = 20.1;
// age = "21"; Error
let userName;
userName = "Sharif";
let isCold;
isCold = false;
// let hobbies: null;
// hobbies = 12; Error
// More complex types
let hobbies;
hobbies = ["Gaming", "Programming", "Gym"];
let person;
person = {
    name: "Sharif",
    age: 25,
};
// Error
// person = {
//   isEmployee: true,
// };
let people; // array of objects
// Type inference
let course = "Angular - A Complete Guide";
// course = 12345; // Error
// Union Type
let course2 = "Modern HTML & CSS From The Beginning 2.0 Course";
course2 = 1; // No Error
// Function and types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    // Return type: void
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // -1, 1, 2, 3
console.log(updatedArray);
updatedArray[0].split("");
