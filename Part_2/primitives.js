// Numbers

let balance = 120;
let anotherBalace = new Number(120);

// console.log(balance);
// console.log(anotherBalace.valueOf());

// console.log(typeof(balance));
// console.log(typeof anotherBalace);

// boolean

let isActive = true
let isReallyActive = new Boolean(true) // not recommended 

// null and undefined

// let firstname;
// console.log(firstname); // it gives undefined
 
// let firstname = null
// console.log(firstname);  // it only runs and don't give anything

let firstname = null;
let lastname  = undefined;
// console.log(firstname);
// console.log(lastname);  // it returns null and undefined

// string

let myString = "hello"
let myStringOne = 'Hola'
let userName = 'Harsh'

let oldGreet = myString + " " + "Harsh";
// console.log(oldGreet);

let greetMsg = `hello ${userName} !`;
let demoOne = `Value is ${2 * 2}`;
// console.log(demoOne);
// console.log(greetMsg);

let sm1 = Symbol("Harsh");
let sm2 = Symbol("Harsh");

console.log(sm1 == sm2);
