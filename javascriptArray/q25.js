function full_month(date) {
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    return months[date.getMonth()]; // getMonth() returns 0 (Jan) to 11 (Dec)
}

// Test the function
const dtFull = new Date(2015, 10, 1);
console.log(full_month(dtFull)); // Output: "November"
