function diff_months(dt1, dt2) {
    // Get the difference in years and months
    var years_diff = dt2.getFullYear() - dt1.getFullYear();
    var months_diff = dt2.getMonth() - dt1.getMonth();

    // Calculate total months difference
    var total_months_diff = years_diff * 12 + months_diff;

    return total_months_diff;
}

// Test Data
var dt1 = new Date("June 13, 2014 08:11:00");
var dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2)); // Output: 4
