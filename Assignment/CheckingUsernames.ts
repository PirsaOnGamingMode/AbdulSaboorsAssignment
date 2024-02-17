// List of current usernames
const current_users: string[] = ['John', 'Alice', 'Bob', 'Charlie', 'Eve'];

// List of new usernames
const new_users: string[] = ['Alice', 'Dave', 'john', 'Mallory', 'Bob'];

// Function to check if a username is already taken
function checkUsernameAvailability(username: string): boolean {
    return !current_users.some((existingUser) => existingUser.toLowerCase() === username.toLowerCase());
}

// Loop through new_users list and check username availability
new_users.forEach((newUser) => {
    if (checkUsernameAvailability(newUser)) {
        console.log(`Username '${newUser}' is available.`);
    } else {
        console.log(`Username '${newUser}' is already taken. Please choose a different username.`);
    }
});
