// Define variable with unknown type
let x: unknown = 'hello world';

// Type cast variable as a string using 'as'
console.log((x as string).length);

// Type cast variable as a string using '<>'
console.log((<string>x).length);
