class DinnerInvitation {
    constructor(public ali: string) {}

    invite(): string {
        return `Dear ${this.ali},\nYou are cordially invited to dinner. Please join us for an evening of good food and great conversation.\n\nBest regards,\n[Your Name]`;
    }
}

// Create a list of guests
const guestList: string[] = ['Albert Einstein', 'Maya Angelou', 'Leonardo da Vinci'];

// Generate and print invitations
guestList.forEach(guest => {
    const invitation = new DinnerInvitation(guest);
    console.log(invitation.invite());
    console.log('\n--------------------------\n');
});
