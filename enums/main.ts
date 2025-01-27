// Define directions enum
enum Directions {
    North,
    East,
    South,
    West
}

// Log a direction
console.log(Directions.North); // Output: 0

// Define fully initialised status codes enum
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

// Log status code
console.log(StatusCodes.Success); // Output: 200