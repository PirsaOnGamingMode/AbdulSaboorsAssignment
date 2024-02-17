// Define a TypeScript interface to represent the structure of a person
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
  }
  
  // Create objects with information about different people
  const person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "john.doe@example.com",
  };
  
  const person2: Person = {
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    email: "jane.smith@example.com",
  };
  
  // Log the information of each person
  console.log("Person 1:", person1);
  console.log("Person 2:", person2);
  