/*
    abstract class: A class that can't be instantiated directly, but only through its derived classes.
*/

abstract class Animal {

    // Define abstract method that must be implemented by derived classes
    abstract move(): void;

    // Define normal method
    makeSound(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    // Implement abstract method
    move(): void {
        console.log("Running");
    }
}

// Instantiate derived class
const dog = new Dog();

// Call abstract method
dog.makeSound(); // Output: Some sound
dog.move(); // Output: Running