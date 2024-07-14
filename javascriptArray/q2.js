function curday(separator) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = today.getFullYear();
    return `${month}${separator}${day}${separator}${year}`;
}

// Test Data
console.log(curday('/')); // Example Output: "07/14/2024"
console.log(curday('-')); // Example Output: "07-14-2024"
