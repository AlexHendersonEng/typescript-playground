// Define overloaded function
function add(a:string, b:string): string;
function add(a:number, b:number): number;
function add(a: any, b:any): any {
    return a + b;
}

// Call overloaded function
console.log(add(5, 10)); // Output: 15
console.log(add('Hello ', 'World')); // Output: Hello World