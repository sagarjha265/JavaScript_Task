function capitalize_Words(str) {
    return str.split(' ').map(word => capitalize(word)).join(' ');
}

// Test Data
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"
