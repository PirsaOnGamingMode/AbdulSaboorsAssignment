let people: string[] = ["Alice", "Bob", "Charlie", "David"];

function printPersonalizedMessage(bob: string): void {
    console.log(`Hello, ${bob}! We hope you have a fantastic day.`);
}

// Loop through the array and print personalized messages
for (let person of people) {
    printPersonalizedMessage(person);
}
