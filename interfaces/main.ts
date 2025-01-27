// Define interfaces
interface Person {
  name: string;
  age: number;
  hello: () => void;
}

interface Employee extends Person {
  salary: number;
}

// Create object
const person: Employee = {
  name: 'John',
  age: 30,
  hello: function() { console.log('Hello', this.name) },
  salary: 1000
};

// Print object
console.log(person);
person.hello();