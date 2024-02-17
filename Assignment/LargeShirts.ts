class Shirt {
    size: string;
    message: string;

    constructor(size: string = 'large', message: string = 'I love TypeScript') {
        this.size = size;
        this.message = message;
    }

    makeShirt(): void {
        console.log(`Creating a ${this.size} shirt with the message: "${this.message}"`);
    }
}

// Creating a large shirt with the default message
const largeShirt = new Shirt();
largeShirt.makeShirt();

// Creating a medium shirt with the default message
const mediumShirt = new Shirt('medium');
mediumShirt.makeShirt();

// Creating a custom-sized shirt with a different message
const customShirt = new Shirt('small', 'Custom message here');
customShirt.makeShirt();
