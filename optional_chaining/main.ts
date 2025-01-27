/*
    Optional chaining (?): A process which allows the access of nested properties of an object
                           without the need to validate the existence of each property in the chain.
                           It first checks the existence of the property and then accesses it. If the
                           variable is null or undefined, it returns undefined.
*/

// Define User type
type User = { 
    id: number; 
    name?: { 
        firstName: string; 
        lastName?: string; 
    } 
}; 

// Define array of User type
const users: User[] = [{ 
    id: 1, 
    name: { 
        firstName: "John",
    } 
}, 
{ 
    id: 2, 
    name: { 
        firstName: "Fred", 
        lastName: "Doe"
    } 
}, 
{ 
    id: 3 
}, 
];

// Use map to print out the last name of each user
users.map(element => console.log(element.name?.lastName));