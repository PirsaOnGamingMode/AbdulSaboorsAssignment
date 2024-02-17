function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Example array of magician's names
const magicianNames: string[] = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];

// Calling the show_magicians function
show_magicians(magicianNames);
