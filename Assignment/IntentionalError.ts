let myArray: number[] = [1, 2, 3, 4, 5];

// Intentionally accessing an out-of-bounds index to cause an error
let index = 10;
try {
    let element = myArray[index];
    console.log("Element at index", index, ":", element);
} catch (error) {
    console.error("Error:", error.message);
}

// Correcting the error by ensuring the index is within bounds
index = 2;
let correctedElement = myArray[index];
console.log("Element at index", index, ":", correctedElement);
