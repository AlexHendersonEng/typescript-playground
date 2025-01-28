/*
    arrays: A homogenous collection of similar types that have a contiguos
            memory location and are accessed by an index.
*/

// Create array
const names: string[] = ['Alice', 'Bob', 'Charlie'];

// Add to array
names.push('Dave');

// Print array
console.log(names); // ['Alice', 'Bob', 'Charlie', 'Dave']

// Create readonly array (cannot be modified)
const numbers: readonly number[] = [1, 2, 3];

// Print array
console.log(numbers); // [1, 2, 3]