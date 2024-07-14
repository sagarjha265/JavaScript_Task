function abbrev_name(name) {
    const parts = name.split(' ');
    return `${parts[0]} ${parts[1][0]}.`;
}

// Test Data
console.log(abbrev_name("Robin Singh")); // "Robin S."
