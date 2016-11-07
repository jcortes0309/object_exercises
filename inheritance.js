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
