/*
    Type guards: Used to check the type of a variable at runtime.
*/

// Example using 'typeof'
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    } else {
        console.log("Number value:", value.toFixed(2));
    }
}
  
// Example using 'instanceof'
class Bird {
    fly() {
        console.log("Bird is flying!");
    }
}
  
class Fish {
    swim() {
        console.log("Fish is swimming!");
    }
}
  
function handleAnimal(animal: Bird | Fish) {
    if (animal instanceof Bird) {
        animal.fly(); // animal is a bird
    } else {
        animal.swim(); // animal is a Fish
    }
}
  
// Example using 'in'
interface Car {
    drive: () => void;
}
  
interface Boat {
    sail: () => void;
}
  
function operateVehicle(vehicle: Car | Boat) {
    if ("drive" in vehicle) {
        vehicle.drive(); // vehicle is a car
    } else {
        vehicle.sail(); // vehicle is a boat
    }
}
  
// Example using a custom 'is' type guard
interface Circle {
    radius: number;
}
  
interface Rectangle {
    width: number;
    height: number;
}
  
function isCircle(shape: Circle | Rectangle): shape is Circle {
    return "radius" in shape;
}
  
function getArea(shape: Circle | Rectangle) {
    if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2; // Circle area formula
    } else {
        return shape.width * shape.height; // Rectangle area formula
    }
}
  
// Example usage
processValue("hello"); // String value: HELLO
processValue(42);      // Number value: 42.00
//
const bird = new Bird();
const fish = new Fish();
handleAnimal(bird); // Bird is flying!
handleAnimal(fish); // Fish is swimming!
//
const car: Car = { drive: () => console.log("Car is driving!") };
const boat: Boat = { sail: () => console.log("Boat is sailing!") };
operateVehicle(car);  // Car is driving!
operateVehicle(boat); // Boat is sailing!
//
const circle: Circle = { radius: 5 };
const rectangle: Rectangle = { width: 4, height: 6 };
console.log(getArea(circle));    // 78.53981633974483 (Circle area)
console.log(getArea(rectangle)); // 24 (Rectangle area)