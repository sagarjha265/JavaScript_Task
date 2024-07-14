function long_Days(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()]; // getDay() returns 0 (Sun) to 6 (Sat)
}

// Test the function
const dtLong = new Date(2015, 10, 1);
console.log(long_Days(dtLong)); // Output: "Sunday"
