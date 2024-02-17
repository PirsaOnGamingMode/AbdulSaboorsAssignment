// Define a list of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Use a for loop to print the name of each animal
for (let animal of animals) {
    console.log(animal);
}

// Use a for loop to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a sentence about what these animals have in common
console.log("Any of these animals would make a great pet!");
