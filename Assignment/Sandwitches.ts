function orderSandwich(items: string[]): void {
    console.log("You ordered a sandwich with:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}

// Example calls with different numbers of arguments
orderSandwich(["Ham", "Cheese", "Lettuce"]);
orderSandwich(["Turkey", "Swiss", "Tomato", "Mayo"]);
orderSandwich(["Peanut Butter", "Jelly"]);
