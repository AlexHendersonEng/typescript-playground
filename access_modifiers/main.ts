/*
    Access Modifiers: Used to control the visibility and accessibility of class members.
        - Public: Accessible from anywhere.
        - Private: Accessible only within the class.
        - Protected: Accessible within the class and its subclasses.
*/

class Animal {
    // Public property: Can be accessed from anywhere
    public name: string;
  
    // Private property: Can only be accessed within this class
    private age: number;
  
    // Protected property: Can be accessed within this class and derived (child) classes
    protected type: string;
  
    constructor(name: string, age: number, type: string) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    // Public method: Can be called from anywhere
    public describe(): string {
      return `This is a ${this.type} named ${this.name}.`;
    }
  
    // Private method: Can only be called within this class
    private getAge(): number {
      return this.age;
    }
  
    // Public method to expose the private 'getAge' method
    public showAge(): string {
      return `${this.name} is ${this.getAge()} years old.`;
    }
}
  
class Dog extends Animal {
    constructor(name: string, age: number) {
      // Use the parent class constructor
      super(name, age, "dog");
    }
  
    // Public method accessing a protected property
    public bark(): string {
      return `${this.name} the ${this.type} says: Woof!`;
    }
}
  
// Usage
const myDog = new Dog("Buddy", 3);

// Accessing public property and methods
console.log(myDog.name); // Buddy
console.log(myDog.describe()); // This is a dog named Buddy.
console.log(myDog.showAge()); // Buddy is 3 years old.
console.log(myDog.bark()); // Buddy the dog says: Woof!