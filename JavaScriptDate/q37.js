function array_filled(count, value) {
    return new Array(count).fill(value);
}

// Test Data
console.log(array_filled(3, 'default value')); // ["default value", "default value", "default value"]
console.log(array_filled(4, 'password')); // ["password", "password", "password", "password"]
