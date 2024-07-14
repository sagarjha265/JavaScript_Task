// Function that accepts another function as a parameter
function executeFunction(func) {
    console.log("Executing the provided function:");
    return func(); // Call the passed function
}

// Example function to pass
function greet() {
    return "Hello, world!";
}

// Example function to pass
function add(a, b) {
    return a + b;
}

// Passing the greet function as a parameter
const greetingResult = executeFunction(greet);
console.log(greetingResult); // Output: Hello, world!

// Passing the add function with parameters
function executeWithParams(func, ...args) {
    return func(...args);
}

// Example usage of the executeWithParams function
const sum = executeWithParams(add, 5, 7);
console.log(sum); // Output: 12
