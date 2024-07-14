function yesterday(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() - 1); // Subtract one day
    return date.toDateString(); // Return the formatted date string
}

// Test
console.log(yesterday('Nov 15, 2014')); // Fri Nov 14 2014
console.log(yesterday('Nov 16, 2015')); // Sun Nov 15 2015
console.log(yesterday('Nov 17, 2016')); // Thu Nov 16 2016
