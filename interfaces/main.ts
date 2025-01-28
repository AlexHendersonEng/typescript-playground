/*
    interface: A way to define the shape of an object by specifying the properties it must
               have and their types. It acts as a contract, ensuring that objects adhere
               to a specific structure.
*/

// Define interfaces
interface Person {
  name: string;
  age: number;
  hello: () => void;
}

interface Employee extends Person {
  salary: number;
}

// Define class which implements interface
class SoftwareEngineer implements Employee {
  name: string;
  age: number;
  salary: number;
  favoriteLanguage: string;

  constructor(name: string, age: number, salary: number, favoriteLanguage: string) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.favoriteLanguage = favoriteLanguage;
  }

  hello() {
    console.log('Hello', this.name);
  }
}

// Create object using interface
const person: Employee = {
  name: 'John',
  age: 30,
  hello: function() { console.log('Hello', this.name) },
  salary: 1000
};

// Print object
console.log(person);
person.hello();

// Create object using class
const engineer = new SoftwareEngineer('John', 30, 1000, 'JavaScript');

// Print object
console.log(engineer);
engineer.hello();