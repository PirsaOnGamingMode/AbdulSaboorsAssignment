// Initial array of guests
let guests: string[] = ["Alice", "Bob", "Charlie"];

// Informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Add a new guest to the beginning of the array
guests.unshift("David");

// Add a new guest to the middle of the array
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Eva");

// Use append() (push() in TypeScript) to add a new guest to the end of the array
guests.push("Frank");

// Print new set of invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
});
