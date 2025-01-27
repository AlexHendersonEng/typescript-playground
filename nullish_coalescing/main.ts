/*
    nullish coalescing (??): A logical operator that returns the right-hand side operand when the
                             left-hand side operand is null or undefined.
*/

// Define function which used nullish coalescing operator
function getUserName(userName: string | null | undefined): string {
    // If userName is null or undefined, default to "Guest"
    return userName ?? "Guest";
}
  
// Test function
console.log(getUserName("Alice")); // Output: Alice
console.log(getUserName(null));    // Output: Guest
console.log(getUserName(undefined)); // Output: Guest