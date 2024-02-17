class Magician {
    constructor(public name: string) {}
}

class MagicianShow {
    private magicians: Magician[] = [];

    addMagician(name: string): void {
        const magician = new Magician(name);
        this.magicians.push(magician);
    }

    showMagicians(): void {
        for (const magician of this.magicians) {
            console.log(magician.name);
        }
    }

    makeGreat(): void {
        for (const magician of this.magicians) {
            magician.name = `the Great ${magician.name}`;
        }
    }
}

// Example usage:
const magicianShow = new MagicianShow();

magicianShow.addMagician("Merlin");
magicianShow.addMagician("Houdini");

console.log("Magicians before making them great:");
magicianShow.showMagicians();

magicianShow.makeGreat();

console.log("\nMagicians after making them great:");
magicianShow.showMagicians();
