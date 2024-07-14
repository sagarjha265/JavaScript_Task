function short_months(date) {
    const shortMonths = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return shortMonths[date.getMonth()]; // getMonth() returns 0 (Jan) to 11 (Dec)
}

// Test the function
const dtShort = new Date(2015, 10, 1);
console.log(short_months(dtShort)); // Output: "Nov"
