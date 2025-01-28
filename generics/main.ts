/*
    Generics: Generics allows for the creation of 'type variables' which can be used to
              create classes, functions & type aliases that don't need to explicitly
              define the types that they use.
*/

// Define arrays of different types
const stringArray: string[] = ['a', 'b', 'c'];
const numberArray: number[] = [1, 2, 3];
const booleanArray: boolean[] = [true, false, true];

// Define a 'generic' function that prints the contents of an array
function printArray<T>(array: T[]): void {
    array.forEach( element => console.log(element) );
}

// Call the function with different types of arrays
printArray<string>(stringArray); // Explicitly define the type
printArray(numberArray); // Implicitly define the type
printArray<boolean>(booleanArray); // Explicitly define the type