// program 1 :"CALCULATE SQUARE"

// Author: aBDUL SABOOR
// Date: 2024-02-18

// This program takes a number as input and calculates its square.

function calculateSquare(num: number): number {
    // Square the input number
    return num * num;
}

const inputNumber: number = 5;
const result: number = calculateSquare(inputNumber);

console.log(`The square of ${inputNumber} is: ${result}`);



// -----------------------------------------------------------------------------------------------------------------------------------


// program 2 :"Find Maximum"
// Author: ABDULSABOOR
// Date: 2024-02-18

// This program finds the maximum value among three numbers.

function findMaximum(num1: number, num2: number, num3: number): number {
    // Compare and return the maximum among three numbers
    return Math.max(num1, num2, num3);
}

const number1: number = 10;
const number2: number = 7;
const number3: number = 14;

const maximumValue: number = findMaximum(number1, number2, number3);

console.log(`The maximum value among ${number1}, ${number2}, and ${number3} is: ${maximumValue}`);

