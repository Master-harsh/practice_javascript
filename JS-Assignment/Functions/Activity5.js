// Write a higher order function that takes a function and a number and calls that function many times. 

// const callFunctionMultipleTimes = function(func, times) {
//     for (let index = 0; index <= times; index++) {
//         func();
//     }
// }

// const callMe = () => {
//     console.log("Hello!");
// }

// const number = 5;

// callFunctionMultipleTimes(callMe, number)

// Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result

const Applyfunction = (func1, func2, value) => {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
};

const multiplyBYTwo = (num) => num * 2

const addThree = (num) => num + 3

const value = 5;
const result = Applyfunction(multiplyBYTwo, addThree, value);
console.log(result,);

