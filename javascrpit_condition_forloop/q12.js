function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}

// Example usage:
printPattern(5); // Prints the specified pattern
