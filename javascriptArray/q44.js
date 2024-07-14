function get_time_difference_in_minutes(dt1, dt2) {
    // Calculate the difference in milliseconds
    var diff_ms = dt2 - dt1;

    // Convert milliseconds to minutes
    var diff_minutes = Math.floor(diff_ms / (1000 * 60));

    return diff_minutes;
}

// Test Data
var dt1 = new Date("October 13, 2014 11:11:00");
var dt2 = new Date(); // Current date and time

console.log(get_time_difference_in_minutes(dt1, dt2));
