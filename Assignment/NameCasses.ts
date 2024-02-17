let personame: string = "zia Khan";

// Print in lowercase
console.log("Lowercase:", personame.toLowerCase());

// Print in uppercase
console.log("Uppercase:", personame.toUpperCase());

// Print in titlecase
console.log("Titlecase:", personame.replace(/\w\S*/g, function (txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}));let personName: string = "Sir Humza";

// Print in lowercase
console.log("Lowercase:", personame.toLowerCase());

// Print in uppercase
console.log("Uppercase:", personame.toUpperCase());

// Print in titlecase
console.log("Titlecase:", personame.replace(/\w\S*/g, function (txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}));


