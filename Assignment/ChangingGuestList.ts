// Original guest list
let guestlist: string[] = ["Guest1", "Guest2", "Guest3"];

// Print original invitation messages
console.log("Original Invitation Messages:");
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to the dinner party!`);
});

// Simulate a guest not being able to make it
const unableToAttend = "Guest2";
console.log(`\nUnfortunately, ${unableToAttend} can't make it to the dinner.\n`);

// Replace the guest who can't make it with a new guest
const newInvitee = "NewGuest";
const indexOfUnableToAttend = guestlist.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guestlist[indexOfUnableToAttend] = newInvitee;
}

// Print updated invitation messages
console.log("Updated Invitation Messages:");
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to the dinner party!`);
});
