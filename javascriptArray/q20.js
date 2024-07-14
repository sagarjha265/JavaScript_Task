function short_Days(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()]; // getDay() returns 0 (Sun) to 6 (Sat)
}

// Test the function
const dt = new Date(2015, 10, 1);
console.log(short_Days(dt)); // Output: "Sun"
