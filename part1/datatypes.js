/*
string
Number
Boolean
BigInt


Undefined
null
0


objects
Arrays arrays also work like a object in JavaScript

Symbol

*/

// var score = 102  // actually this is aold way to define the variables which is throw error in future so that's why we don't use this variable ;
// we use let keyword insted of var

let score = 120;
let name = "Harsh"
let isLoggedIn = false

// object

let teatype = ["lemon tea", "orange tea", "oolong tea"]
let user = {
    firstName: "Harsh",
    lastNmae: "Tiwari"
}

// we can change the let keyword value using another value but we can not change the value of a variable when we assigned it using const keyword we are not able to change becouse it is a constant value

// for example;

const username = "Harsh Tiwari"

username = "Hitesh"

// if i want to print them in console then it throws an error :: TypeError: Assignment to constant variable.

console.log(username);
