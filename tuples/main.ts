/*
    Tuple: A typed array with predefined number of elements and types
           for each index.
*/

// Create tuple
let myTuple: [string, number] = ['Hello', 100];

// Add to tuple (only first two elements have type specified)
myTuple.push('World', '!');

// Print out tuple
console.log(myTuple);

// Create readonly tuple
let myReadOnlyTuple: readonly [string, number] = ['Hello', 100];

// Print out tuple
console.log(myReadOnlyTuple);

// Create named tuple (used to provide context for values)
let myNamedTuple: [x: number, y: number] = [100, 200];

// Print out tuple
console.log(myNamedTuple);