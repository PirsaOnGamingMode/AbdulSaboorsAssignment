let dinnerGuests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print the original guest list
console.log("Original Guest List:", dinnerGuests.join(", "));

// Inform that only two people can be invited
console.log("Due to a delay, I can only invite two people for dinner.");

// Remove guests one at a time until only two names remain
while (dinnerGuests.length > 2) {
    const removedGuest = dinnerGuests.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

// Print a message to each of the two people still on the list
dinnerGuests.forEach(guest => {
    console.log(`You're still invited, ${guest}!`);
});

// Remove the last two names from the list
dinnerGuests.pop();
dinnerGuests.pop();

// Print the final list to ensure it's empty
console.log("Final Guest List:", dinnerGuests.join(", "));
