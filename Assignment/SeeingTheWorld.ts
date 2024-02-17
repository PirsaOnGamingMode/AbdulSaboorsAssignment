let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Marrakech", "Sydney"];

// Print array in its original order
console.log("Original order:", placesToVisit);

// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order after alphabetical sorting:", placesToVisit);

// Print array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order after reverse alphabetical sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
