/*
    Intersection types (&): Used to combine multiple types into one.
*/

// Define two types
type PersonalInfo = {
    name: string;
    age: number;
};

type JobInfo = {
    jobTitle: string;
    company: string;
};

// Create an intersection type
type Employee = PersonalInfo & JobInfo;

// Function using the intersection type
function printEmployeeInfo(employee: Employee): void {
    console.log(`Name: ${employee.name}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Job Title: ${employee.jobTitle}`);
    console.log(`Company: ${employee.company}`);
}

// Create an object that matches the intersection type
const employee: Employee = {
    name: "Alice",
    age: 30,
    jobTitle: "Software Engineer",
    company: "Tech Corp"
};

// Call the function
printEmployeeInfo(employee);
