// Task-1

let dayIs = 7
switch (dayIs) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Please give a valid number within 1 to 7");
        break;
}

// Task-2

let score = 50;

switch (true) {
    case (score > 80):
        console.log("GRADE - A");
        break;

    case (score > 70 && score <= 80):
        console.log("GRADE - B");
        break;

    case (score > 60 && score <= 70):
        console.log("GRADE - C");
        break;

    case (score > 50 && score <= 60):
        console.log("GRADE - D");
        break;

    case (score <= 50):
        console.log("GRADE - F");
        break;

    default:
        console.log("Sorry! no valid Grade");
        break;
}
