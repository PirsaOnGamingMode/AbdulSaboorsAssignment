// Define the original array of magicians' names
const magicians: string[] = ['Merlin', 'Gandalf', 'Dumbledore'];

// Function to add 'the Great' to each magician's name and return a new array
function makeGreat(names: string[]): string[] {
  const greatMagicians: string[] = names.map(name => name + ' the Great');
  return greatMagicians;
}

// Function to display the magicians' names
function showMagicians(names: string[]): void {
  names.forEach(name => console.log(name));
}

// Call makeGreat() with a copy of the original array
const greatMagiciansArray: string[] = makeGreat([...magicians]);

// Display the original array
console.log('Original Magicians:');
showMagicians(magicians);

// Display the array with 'the Great' added to each magician's name
console.log('\nMagicians with "the Great":');
showMagicians(greatMagiciansArray);
