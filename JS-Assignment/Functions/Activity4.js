// Write a function that takes two parameters and return their product. Provide a default value for the second parameter

const ProductOfTwo = function(num1, num2 = 10) {
    return num1 * num2
}

const number1 = 10
let number2

// const result = ProductOfTwo(number1, number2)
// console.log(result);


// write a function that takes a person's name and age and return a greeting message. provide a default value for the age

const GreetingMsg = function(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
};

const Name = "Harsh Tiwari"
let Age;

const result = GreetingMsg(Name, Age)
console.log(result);
 
