// use spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to console
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];

console.log(parts);
console.log(lyrics);

// Use rest operator in a function to accept an arbitrary number of arguments, sum them, and returns the result

function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
  }
  
  const result = sum(1, 2, 3, 4, 5);
  console.log(result);