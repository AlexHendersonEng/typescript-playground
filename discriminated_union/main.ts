/*
    Discriminated union: A common technique for working with unions where a common property
                         can be used to differentiate between the members of the union.
*/

// Define two interfaces with a common discriminant property 'type'
interface Dog {
    type: 'dog';
    breed: string;
};
  
interface Cat {
    type: 'cat';
    color: string;
};
  
// Define a union type using the discriminant property 'type'
type Animal = Dog | Cat;
  
// Function that uses the discriminated union
function describeAnimal(animal: Animal): string {
    if (animal.type === 'dog') {
        return `This is a ${animal.breed} dog.`;
    } else {
        return `This is a ${animal.color} cat.`;
    }
}
  
// Example usage
const dog: Dog = { type: 'dog', breed: 'Golden Retriever' };
const cat: Cat = { type: 'cat', color: 'Black' };
//
console.log(describeAnimal(dog)); // "This is a Golden Retriever dog."
console.log(describeAnimal(cat)); // "This is a black cat."