/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
// creating our constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
// creating a method that gives the person the ability to eat and has a paramter that we can add food to
// if the stomach length is < 10 a person can eat
// we want to push the argument of something edible to the array (stomach)

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}
// time to create a poop method

Person.prototype.poop = function(){
  this.stomach = [];
}
// making a method to convert it to a string
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}
// time to finally create our object

const personOne = new Person('Joe', 23);

console.log(personOne.toString());
personOne.eat('tacos');
personOne.eat('Pizza');
console.log(personOne.stomach);

personOne.poop();
console.log(personOne.stomach);



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
// Building my constructor function
function Car(model, milesPerGallon) { 
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
// creating method
Car.prototype.fill = function(gallons){
  this.tank += gallons;
};
Car.prototype.drive = function(distance){
  this.odometer = this.odometer + distance;
  this.tank = this.tank - Math.floor(distance/this.milesPerGallon);
  const maxDist = this.tank * this.milesPerGallon;
    if(this.tank <= 0){
     return `I ran out of fuel at ${this.odometer} miles!`;
  }
};

// creat object // car name and miles per gallon
const firstCar = new Car('BatMobile', 10);
// filling up with x amount of gallons
firstCar.fill(10);

console.log(firstCar.drive(100));



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// creating baby constructor
function Baby(name, age, favoriteToy) {
Person.call(this, name, age); // binds this to person
this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

// creating method for play
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}, ${this.favoriteToy} being the favorite toy`;
}
const newBaby = new Baby('Lucy', 5, 'Trains');
console.log(newBaby.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. running this on the global scope resulting in undefined while in strict mode or referencing a giant file while not in strict mode
  2. implicit binding is next which basically means it points to the object to the left of the '.'also used most of the time
  3. Explicit binding is when you use methods like call, apply, and even bind. by using these you invoke a function with a value for 'this'
  4. new binding is the last one, by using the 'new' keyword it constructs a new object and 'this' points to it
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
