/*
1. Declare an array named `teaFlavoers` that contains the string `"green tea"`, `"black tea"` and `"oolong tea"`.
access the first element of the array and store it in a variable named `firstTea` 
*/

let teaFlavoers = ["green tea", "black tea", "oolong tea"];

// let teaFl = new Array("green tea", "black tea", "oolong tea")

// const firstTea = teaFlavoers[0]
// console.log(firstTea);

/*
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`.
Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"]
const favoriteCity = cities[2];
// console.log(favoriteCity);


/*
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`.
change the second element of the array to `"jasmine tea"`.
*/ 

let teaTypes = ["heble tea", "white tea", "masala chai"];
teaTypes[1] = "green tea";
// console.log(teaTypes);

/*
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydeny"`.
 Add `"Berlin"` to the array using the `push` method.
*/

// let citiesVisited = ["Mumbai", "Sydeny"];
// citiesVisited[2] = "Barlin"
// console.log(citiesVisited);  // it add second element in array

let citiesVisited = ["Mumbai", "Sydeny"]
citiesVisited[3] = "Berlin"
// console.log(citiesVisited); // if we select 3 element then it automatically put's an empty element

// citiesVisited.push("Barlin")
// console.log(citiesVisited);  // second way

/*
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`.
Remove the last element of the array using the `pop`
method and store it in a variable named `lastorder`.
*/

// let teaOrders = ["chai", "iced tea", "matcha", "earl"];
// teaOrders.pop(); // it can remove last element from array this is a first way to pop element from array
// console.log(teaOrders);

// let teaOrders = ["chai", "iced tea", "matcha", "earl"];
// teaOrders.pop("earl"); // it can remove last element from array and this is a second way to pop element from array
// console.log(teaOrders);

let teaOrders = ["chai", "iced tea", "matcha", "earl"];
const lastorder = teaOrders.pop(); 
// console.log(teaOrders);
// console.log(lastorder); // actually it returns the element removed from array

/* 
6. You have an array named `popularTeas` containing
`"green tea"`, `"oolong tea"`, and `"chai"`.
Create a soft copy of this array named `softCopyTeas`
*/

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas

// console.log(popularTeas);
// console.log(softCopyTeas);

/*
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`.
create a hard copy of this array named `hardCopyCities`
*/ 

let topCities = ["Barlin", "Singapore", "New York"]
let hardCopyCities = [...topCities] // this is a spred and rest method
// let hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities);

/*
8. You have two arrays: `europeanCities` containing
`"Paris"`, and `"Rome"`, and `asianCities` containing
`"Tokyo"` and `"Bangkok"`.
Merge these two arrays into a new array named `worldCities`.
*/ 

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

// here we use a new thing to concatinate array
let worldCities = europeanCities.concat(asianCities); // now it converts in an array

// let worldCities = europeanCities + asianCities; // it takes both and addup as a string

// console.log(worldCities); 

// if we wants to check the type of this now we check

// console.log(typeof worldCities); // Now it returns an object in output

/*
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`.
Find the length of the array and store it in a variable  named `menuLength`.
*/ 

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length

console.log(teaMenu);
console.log(menuLength);

/*
10. You have an array named `cityBucketList` containing `"kyoto"`, `"London"`, `"Cape Town"`, and
`"Vancouver"`.
check if `"London"` is in the array and store the reesult in a variable named `"isLondonInList"`.
*/

let cityBucketList = ["kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London")

console.log(isLondonInList);

