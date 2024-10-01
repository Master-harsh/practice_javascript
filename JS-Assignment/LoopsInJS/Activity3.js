// do-while loop
// write a program to print numbers from 1 to 5 using a do...while loop

// // let num = 1
// do {
//     // console.log(num);
//     // num++;
    
// } while (num <= 5);

// write a program to calculate the factorial of number using a do-while loop

let num = 5; 
let fact = 1; 
let i = num; 

do {
    fact = fact * i;
    i--;       
} while (i > 0);

console.log(`The factorial of ${num} is: ${fact}`);

