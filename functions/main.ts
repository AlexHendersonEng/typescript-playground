// Function accepting optional parameters
function add(a: number, b: number , c?: number) {
    return a + b + (c || 0);
}

// Function with default parameters
function mul(a: number, b: number = 10) {
    return a * b;
}

// Call functions and print the results
console.log(add(1, 2))
console.log(mul(2))