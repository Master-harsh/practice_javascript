let year = 2024;

if (year % 4 == 0) {                    // First check: divisible by 4
    if (year % 100 == 0) {               // Second check: divisible by 100
        if (year % 400 == 0) {           // Third check: divisible by 400
            console.log(`${year} is a leap year`);
        } else {
            console.log(`${year} is not a leap year`);  // Divisible by 100 but not by 400
        }
    } else {
        console.log(`${year} is a leap year`);         // Divisible by 4 but not by 100
    }
} else {
    console.log(`${year} is not a leap year`);          // Not divisible by 4
}
