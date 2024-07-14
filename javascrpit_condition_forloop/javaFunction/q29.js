function getFunctionName(func) {
    if (typeof func === 'function') {
        return func.name || 'Anonymous function';
    }
    return 'Not a function';
}

// Example usage:
function exampleFunction() {
    // Some code here
}

const functionName = getFunctionName(exampleFunction);
console.log(functionName); // Output: 'exampleFunction'

// Testing with an anonymous function
const anonymousFunction = function() {
    // Some code here
};

const anonymousName = getFunctionName(anonymousFunction);
console.log(anonymousName); // Output: 'Anonymous function'
