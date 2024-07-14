function calculate_age(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--; // Decrement age if the birthday hasn't occurred this year yet
    }
    return age;
}

// Test the function
console.log(calculate_age(new Date(1982, 11, 4))); // Output: 32 (as of 2015)
console.log(calculate_age(new Date(1962, 1, 1)));  // Output: 53 (as of 2015)
