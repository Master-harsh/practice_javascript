// Write a function that takes two parameters and return their products, with the second parameter having a default value of 1. log the result of calling this function with and without the seconde parameter

function Multiply(a, b = 2) {
    return a * b;
}

const result1 = Multiply(10, 20); // with second parameter 
console.log(result1);

const result2 = Multiply(10); // without second parameter
console.log(result2);

