/*
    Union types (|): Used to describe a value that can be one of several types.
*/

// Define a union type
type Status = "success" | "error" | "loading";

// Function using the union type
function printStatusMessage(status: Status): void {
    if (status === "success") {
        console.log("Operation was successful!");
    } else if (status === "error") {
        console.log("An error occurred.");
    } else if (status === "loading") {
        console.log("Loading... Please wait.");
    }
}

// Call the function with different values of the union type
printStatusMessage("success"); // Output: Operation was successful!
printStatusMessage("error");   // Output: An error occurred.
printStatusMessage("loading"); // Output: Loading... Please wait.