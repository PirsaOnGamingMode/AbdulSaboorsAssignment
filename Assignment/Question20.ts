// Define arrays for different categories
const mountains: string[] = ["Mount Everest", "K2", "Denali", "Kangchenjunga", "Matterhorn"];
const rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi", "Danube"];
const countries: string[] = ["USA", "China", "India", "Brazil", "Germany"];
const cities: string[] = ["New York", "Tokyo", "Paris", "Mumbai", "Sydney"];
const languages: string[] = ["English", "Mandarin", "Spanish", "Hindi", "French"];

// Combine all arrays into a single array
const combinedArray: string[] = [...mountains, ...rivers, ...countries, ...cities, ...languages];

// Print the combined array
console.log("Combined Array:", combinedArray);
