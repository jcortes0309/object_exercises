// // Inheritance
// //
// // Given the following objects:
//
// var mom = {
//   firstName: 'Alice',
//   lastName: 'Wong',
//   eyeColor: 'brown',
//   hairColor: 'black'
// };
//
// var daughter = {
//   firstName: 'Ilene',
//   hairColor: 'brown'
// };
// //
// // One
// //
// // Write code using __proto__ to make daughter inherit properties from mom. Print out each property that daughter has. What are they and what are their values?
//
// daughter.__proto__ = mom;
// console.log("First name:", daughter.firstName);
// console.log("Last name:", daughter.lastName);
// console.log("Hair color:", daughter.hairColor);
// console.log("Eye color:", daughter.eyeColor);
//
// // Two
// //
// // Add a method called showInfo to mom by attaching a function to it. Calling this method will print out all four properties.
//
// mom.showInfo = function() {
//   console.log("First name:", this.firstName);
//   console.log("Last name:", this.lastName);
//   console.log("Hair color:", this.hairColor);
//   console.log("Eye color:", this.eyeColor);
// };
//
// console.log("");
// console.log("");
// mom.showInfo();
// console.log("");
// console.log("");
// daughter.showInfo();
//
// // Three
// //
// // Given this Character type
//
// function Character () {
//   this.health = 5;
//   this.power = 1;
//   this.speed = 5;
// }
//
// Character.prototype.attack = function(enemy) {
//   enemy.health -= this.power;
// };
//
// Character.prototype.alive = function () {
//   return this.health > 0;
// };
//
// // Writing Goblin to use as enemy to attack
// function Goblin() {
//   this.name = "Goblin";
//   this.health = 20;
//   this.power = 2;
// }
//
// // Write a Hero type that inherits it and overrides the attack method to randomly with 20% chance, double the dealt damage.
//
// function Hero() {
//   // This line would allow Hero to inherit characteristics from the Character constructor
//   Character.apply(this);
//   this.name = "Hero";
//   this.health = 10;
//   this.power = 5;
// }
//
// Hero.prototype = Object.create(Character.prototype);
//
// Hero.prototype.attack = function (enemy) {
//   var chance = 20;
//   var number = Math.floor((Math.random() * 100) + 1);
//
//   if (number <= chance) {
//     enemy.health -= this.power * 2;
//     console.log("Hero is causing double the damage");
//   } else {
//     enemy.health -= this.power;
//     console.log("Hero is causing single damage");
//   }
// };
//
// var goblin = new Goblin();
// var hero = new Hero();
// hero.attack(goblin);
//
// Five
//
// Given this Person type:
//
// function Person(name) {
//   this.name = name;
// }
//
// Person.prototype.greet = function(other) {
//   console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
// };
//
// Rewrite the above type by inlining it's greet method into it's constructor.

function Person(name) {
  this.name = name;
  this.greet = function (other) {
    console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
  };
}

var john = new Person('John');
var mary = new Person('Mary');
john.greet(mary);
console.log(john);
