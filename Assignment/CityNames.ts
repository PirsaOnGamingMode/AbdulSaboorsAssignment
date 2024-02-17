function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Example usage:
const result1: string = city_country("Lahore", "Pakistan");
const result2: string = city_country("Tokyo", "Japan");
const result3: string = city_country("New York", "USA");

console.log(result1);
console.log(result2);
console.log(result3);
