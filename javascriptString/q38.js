function case_insensitive_search(str, search) {
    return str.toLowerCase().includes(search.toLowerCase()) ? "Matched" : "Not Matched";
}

// Test Data
console.log(case_insensitive_search('JavaScript Exercises', 'exercises')); // "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises')); // "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess')); // "Not Matched"
