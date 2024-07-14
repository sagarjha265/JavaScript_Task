function diff_hours(dt1, dt2) {
    // Calculate the difference in milliseconds
    var diff_ms = dt2 - dt1;

    // Convert milliseconds to hours
    var diff_hours = Math.floor(diff_ms / (1000 * 60 * 60));

    return diff_hours;
}

// Test Data
var dt1 = new Date("October 13, 2014 08:11:00");
var dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2)); // Output: 3
