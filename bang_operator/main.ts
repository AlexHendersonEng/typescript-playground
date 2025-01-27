/*
    bang operator (!): Known as the non-null assertion operator. It tells the compiler
                       that a value will not be null or undefined at that specific
                       point overriding the compilers strict null checks.
*/

// Define function using bang operator
function getLength(input: string | null): number {
    // The 'input!' asserts that 'input' is not null.
    return input!.length;
}
  
// Call function with a string
const msg: string | null = "Hello, World!";
const len = getLength(msg);

// Print output
console.log(`The length of the string is: ${len}`);