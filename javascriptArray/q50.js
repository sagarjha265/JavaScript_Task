function getWeekStartDate(date) {
    var startDate = new Date(date);
    // Set to the previous Sunday (or the same if today is Sunday)
    startDate.setDate(startDate.getDate() - startDate.getDay());
    // Reset time to the start of the day
    startDate.setHours(0, 0, 0, 0);
    return startDate;
}

// Example usage
var dt = new Date("October 19, 2014 11:13:00");
console.log(getWeekStartDate(dt)); // Output: "Sun Oct 12 2014 ..."
