// Define interface
interface Person {
  name: string;
  age: number;
  hello: () => void;
}

// Create object
const person: Person = {
  name: 'John',
  age: 30,
  hello: function() { console.log('Hello', this.name) }
};

// Print object
console.log(person);
person.hello();