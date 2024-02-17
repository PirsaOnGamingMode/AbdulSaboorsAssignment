let users: string[] = ["user1", "user2", "user3"];

// Check if the list of users is not empty
if (users.length > 0) {
    // Remove all usernames from the array
    users = [];
    console.log("All usernames removed.");
} else {
    console.log("We need to find some users!");
}
