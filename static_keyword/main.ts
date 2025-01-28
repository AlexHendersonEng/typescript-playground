/*
    static keyword: Used to define properties or methods that belong to a class itself
                    rather than any instance of the class. This means that you can access
                    these static members directly on the class without creating an
                    object (instance) of the class.
*/

// Define class using static keyword
class Person {
    // Define static property
    static count: number = 0;

    // Define static method
    static getCount(): number {
        return Person.count;
    }

    // Define constructor
    constructor() {
        // Increment static property
        Person.count++;
    }
}

// Create objects of Person class
const person1 = new Person();
const person2 = new Person();

// Access static property
console.log(Person.count); // Output: 2

// Call static method
console.log(Person.getCount()); // Output: 2