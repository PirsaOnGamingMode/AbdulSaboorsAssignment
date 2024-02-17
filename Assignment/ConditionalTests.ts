let car: string = 'subaru';
let age: number = 5;
let isSunny: boolean = true;
let fruits: string[] = ['apple', 'orange', 'banana'];
let person = { name: 'John', age: 25 };

// Test 1: Is car equal to 'subaru'?
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2: Is age greater than 18?
console.log("Is age > 18? I predict False.");
console.log(age > 18);

// Test 3: Is it sunny?
console.log("Is it sunny? I predict True.");
console.log(isSunny);

// Test 4: Is 'apple' in the fruits array?
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// Test 5: Is person's age less than or equal to 30?
console.log("Is person's age <= 30? I predict True.");
console.log(person.age <= 30);

// Test 6: Is car not equal to 'honda'?
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

// Test 7: Is age less than 5?
console.log("Is age < 5? I predict False.");
console.log(age < 5);

// Test 8: Is it not sunny?
console.log("Is it not sunny? I predict False.");
console.log(!isSunny);

// Test 9: Is 'grape' in the fruits array?
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));

// Test 10: Is person's name equal to 'Jane'?
console.log("Is person's name == 'Jane'? I predict False.");
console.log(person.name == 'Jane');
