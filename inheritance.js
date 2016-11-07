// Inheritance
//
// Given the following objects:

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

// One
//
// Write code using __proto__ to make daughter inherit properties from mom. Print out each property that daughter has. What are they and what are their values?

daughter.__proto__ = mom;
console.log("First name:", daughter.firstName);
console.log("Last name:", daughter.lastName);
console.log("Hair color:", daughter.hairColor);
console.log("Eye color:", daughter.eyeColor);

// Two
//
// Add a method called showInfo to mom by attaching a function to it. Calling this method will print out all four properties.

mom.showInfo = function() {
  console.log("First name:", this.firstName);
  console.log("Last name:", this.lastName);
  console.log("Hair color:", this.hairColor);
  console.log("Eye color:", this.eyeColor);
};

console.log("");
console.log("");
mom.showInfo();
console.log("");
console.log("");
daughter.showInfo();
