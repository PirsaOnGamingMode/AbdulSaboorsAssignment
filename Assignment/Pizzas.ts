// Array of favorite pizza names
const pizzas: string[] = ["Margherita", "Pepperoni", "Vegetarian"];

// Using a for loop to print the name of each pizza
console.log("My favorite pizzas:");
for (let i = 0; i < pizzas.length; i++) {
    // Printing the name of each pizza
    console.log(pizzas[i]);
}

// Modifying the for loop to print a sentence using the name of the pizza
console.log("\nMy favorite pizzas with statements:");
for (let i = 0; i < pizzas.length; i++) {
    // Printing a sentence using the name of the pizza
    console.log(`I like ${pizzas[i]} pizza.`);
}

// Adding a line at the end of the program
console.log("\nI really love pizza!");
