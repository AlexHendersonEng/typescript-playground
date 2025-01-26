/*
    Important TypeScript types:
    
    number: Whole numbers and floating point numbers. 
    string: Text values.
    boolean: True or false values.
    bigint: Whole numbers and floating point numbers, but allows larger
            numbers than the number type.
    symbol: Used to create a globally unique identifier.
    any: Any value.
    unknown: A value that we don't know the type of yet.
    never: A value that never occurs.
    undefined: A value that is undefined.
    null: A value that is null.
*/

// Explicit type
let explicitType: string = "Explicit type";
console.log("Explicit type: " + explicitType);

// Implicit type
let implicitType = "Implicit type";
console.log("Implicit type: " + implicitType);

// Any type
let anyType: any = "Any type";
console.log("Any type: " + anyType);

// Unknown type
let unknownType: unknown = "Unknown type";
console.log("Unknown type: " + unknownType);

// Undefined type
let undefinedType: undefined = undefined;
console.log("Undefined type: " + undefinedType);

// Null type
let nullType: null = null;
console.log("Null type: " + nullType);

