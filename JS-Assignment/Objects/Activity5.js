// Use a for loop to iterate over the properties of the book object and log each property and its value
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };
  for (let property in book) {
    console.log(`${property}: ${book[property]}`);
  }

// use object.keys and object.values methods to log all the keys and values of the object 

const car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

const result1 = Object.keys(car)
console.log(result1);
const result2 = Object.values(car)
console.log(result2);

