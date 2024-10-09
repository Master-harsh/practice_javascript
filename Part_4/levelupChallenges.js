/*
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let chaiArray = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTeas = [];

for (let index = 0; index < chaiArray.length; index++) {
  if (chaiArray[index] === "chai") {
    break;
  }

  selectedTeas.push(chaiArray[index]); // it does not include chai in our list
}
// console.log(chaiArray);
// console.log(selectedTeas);

/*
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`,
store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let index = 0; index < cities.length; index++) {
  if (cities[index] === "Paris") {
    continue;
  }
  visitedCities.push(cities[index]);
}
// console.log(visitedCities);

/*
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
Store the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

/*
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herble tea", "black tea"]` and skip `"herble tea"`.
Store the other teas in an array named `perferredTeas`
*/

let teas = ["chai", "green tea", "herble tea", "black tea"];

let perferredTeas = [];

for (const tea of teas) {
  if (tea === "herble tea") {
    continue;
  }

  perferredTeas.push(tea);
}

// console.log(perferredTeas);

/*
5. Use a `for-in` loop to loop through am object containing city populations.
Stop the loop when the population of `"Barlin"` is found and store all previous cities populations in a new object named `cityPopulations`.

let citiesPopulation = {
"London": 8900000,
"New York: 8400000,
"Paris": 2200000,
"Barlin": 3500000
};
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Barlin: 3500000,
};

let citiesPopulations = {}

// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
    if (city == "Barlin") {
        break;
    }
    citiesPopulations[city] = citiesPopulation[city];
}
// console.log(citiesPopulations);

/*
6. use `for-in` loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
"sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
};
*/
let worldCities = {
    "sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
    };

let largeCities = {}

for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue;
    }
    largeCities[city] = worldCities[city];
}
// console.log(largeCities); 

/*
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`
*/

let ChaiTypes = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

ChaiTypes.forEach(function(tea) {
    if (tea === 'chai') {
        return ;
    }
    availableTeas.push(tea);
});

// console.log(availableTeas);


/*
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.
Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let myWorldCitie = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCitie.forEach(city => {
    if (city === 'Sydney') {
        return;
    }
    traveledCities.push(city);
});
// console.log(traveledCities);

/*
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]` .
Skip the value `7` and multiply the rest by 2. Store the result in a new array named `doubledNumbers`.
*/

// let NumberArray = [2, 5, 7, 9];

// let doubledNumbers = [];

// NumberArray.forEach((num) => {
//     if (num === 7) {
//         return;   // this is using foreach function
//     }
//     doubledNumbers.push(num*2)
// })
// console.log(doubledNumbers);

// using for loop

let NumberArray = [2, 5, 7, 9];
let doubledNumbers = [];

for (let index = 0; index < NumberArray.length; index++) {
    if (NumberArray[index] === 7) {
        continue;
    }
    doubledNumbers.push(NumberArray[index] * 2);
};

// console.log(doubledNumbers);

/*
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "Jasmine tea", "herble tea"]`
and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named `shortTeas`.
*/

let ArrayOfchai = ["chai", "green tea", "black tea", "Jasmine tea", "herble tea"];

let shortTeas = [];

for (const chai of ArrayOfchai) {
    if (chai.length > 10) {
        break;
    }
    shortTeas.push(chai);
}

console.log(shortTeas);
