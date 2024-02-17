// Tests for equality and inequality with strings
let string1: string = "Hello";
let string2: string = "World";

console.log(string1 === string2); // False
console.log(string1 !== string2); // True

// Tests using the lower case function
let lowercaseString: string = "LowerCase";
let uppercaseString: string = "LOWERCASE";

console.log(lowercaseString.toLowerCase() === uppercaseString.toLowerCase()); // True
console.log(lowercaseString.toLowerCase() !== uppercaseString.toLowerCase()); // False

// Numerical tests
let num1: number = 10;
let num2: number = 5;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
let condition1: boolean = true;
let condition2: boolean = false;

console.log(condition1 && condition2); // False (AND)
console.log(condition1 || condition2); // True (OR)

// Test whether an item is in an array
let array: number[] = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // True
console.log(array.includes(6)); // False

// Test whether an item is not in an array
console.log(!array.includes(3)); // False
console.log(!array.includes(6)); // True
