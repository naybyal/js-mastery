/**
 *  object  ->  a group of properties and methods 
 *              properties = what an object has
 *              methods = what an object can do 
 * 
 *              use . to access properties/methods
 * 
 * 
 *  this    ->  reference to a particular object
 *              the object depends on the intermediate context
 * 
 * 
 *  class   ->  blueprint for creating objects
 *              define what properties and methods they have
 *              use a constructor for unique properties
 * 
 *  constructor     ->  special method of a class, accepts arguments and assigns properties
 * 
 * 
 *  static  ->  belongs to the class, not the objects
 *              properties : useful for caches, fixed-configurations
 *              methods :    useful for utility functions 
 * 
 * 
 *  inheritance ->  a child clas can inherit all the methods and properties from another class
 * 
 * 
 *  super   ->  refers to the parent class.
 *              commonly used to invoke constructor of a parent class.
 * 
 *  --  Getters and Setters --
 * 
 *  get     ->  binds an object property to a function
 *              when that property is accessed
 * 
 *  set     ->  binds an object property to a function
 *              when that property is assigned to a value
 * 
 *  anonymous objects   ->  objects without a name
 *                          not directly referenced
 *                          less syntax; no need for unique names
 */

let car = {
    model: "Mustang",
    color:  "Black",
    year: 2023,

    // drive: () => console.log(`Driving the ${this.model}.`),
    drive: function() { console.log(`Driving the ${this.model}.`)},
    brake: () => console.log("Step on the brakes!")
}
// console.log(`${ car } \n`);     //  doesn't work
// console.log(car + '\n');        // doesn't work

console.log(car);
console.log('\n');
car.drive();
car.brake();


this.name='myWindow';
console.log(this.name);  //  refers to the window object.   Logs out {}


class Player {
    score = 0;

    pause() {
        console.log("You've paused the game.");
    }

    exit() {
        console.log("You've exited the game.");
    }
}

const playerOne = new Player();
const playerTwo = new Player();

playerOne.score++;

console.log(playerOne.score)
console.log(playerTwo.score)

playerOne.pause();
playerTwo.exit();
class Vehicle {
    hasWheels = true;
}
class Car{
    static numberOfCars = 0;

    constructor(model) {
        this._fuel = 20;
        this._model = model;        //  _ denotes that it's protected
        Car.numberOfCars += 1;
    }

    drive() {
        console.log(`${this._model} has started driving!`)
    }

    static startRace = () => { 
        console.log("3..2..1..GO!"); 
    }

    get model() {
        // return this.model;   returns an error
        return 'Model : ' + this._model;         //  returns the protected property
    }

    get fuel() {
        return `${ this._fuel }L (${ this._fuel/50 *100 }%)`
    }

    set fuel(value) {
        if (value > 50) 
            value = 50;
        else if (value < 0)   value = 0;
        this._fuel = value;
    }

}

const car1 = new Car('Endeavour');
const car2 = new Car('Virtus');
const car3 = new Car('Octavia');
const car4 = new Car('i10');


// console.log(car3.numberOfCars); // cannot access
console.log('Number of cars: '+Car.numberOfCars);
Car.startRace()

class Bike extends Vehicle {

}

let bike1 = new Bike();
console.log('Bike has wheels? : '+bike1.hasWheels);

console.log(car1.model);            // no need to use ();


console.log(car1.fuel);
car1.fuel = -1;
console.log(car1.fuel);


//  array of objects

const cars = [car1, car2, car3, car4];

console.log(cars[1].model);
console.log();
function startRace(cars) {
    for (const car of cars) {
        car.drive();
    }
}

startRace(cars);

const newCarArray = [
    new Car("RR Velar"),                //  clean code!
    new Car("LR Discovery"),
    new Car("Superb"),
    new Car("Volvo S90")
];

for (const car of newCarArray) {
    console.log(car);
}