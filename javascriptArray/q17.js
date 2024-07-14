function unixToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    return date.toISOString().substring(11, 19); // Format as HH:mm:ss
}

// Test the function with a sample Unix timestamp
console.log(unixToTime(1451606400)); // Example: 01-01-2016 00:00:00
