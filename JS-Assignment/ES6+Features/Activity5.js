// use enhanced object literals to create an object with methods and properties, and log the object to the console

const name = "Harsh";
const age = 24;

const person1 = {
  name,           
  age,             
  greet() {       
    console.log(`Hello, my name is ${this.name}.`);
  },
  getAge() {     
    return this.age;
  }
};


console.log(person1);


person1.greet();
console.log(person1.getAge()); 

// Create an object with computed property names based on variables and log the object to the console

const key1 = "firstName";
const key2 = "lastName";

const person = {
  [key1]: "Harsh",    
  [key2]: "Tiwari",   
  age: 24,
  greet() {
    console.log(`Hello, my name is ${this[key1]} ${this[key2]}.`);
  }
};

console.log(person);

person.greet(); 
