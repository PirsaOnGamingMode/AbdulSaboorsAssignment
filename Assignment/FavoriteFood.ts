// Array of favorite fruits
let favorite_fruits: string[] = ["banana", "apple", "strawberry"];

// If statements to check for specific fruits
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
    console.log("Apples are one of your favorite fruits!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("Strawberries are on your list of favorite fruits!");
}

// Checking for other fruits
if (favorite_fruits.includes("orange")) {
    console.log("Oranges are also among your favorites!");
} else {
    console.log("Oranges didn't make it to your favorite fruits list.");
}

if (favorite_fruits.includes("grape")) {
    console.log("Grapes are part of your top three favorite fruits!");
} else {
    console.log("Grapes didn't make it to your top three favorite fruits.");
}
