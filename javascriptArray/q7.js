function is_weekend(dateString) {
    const date = new Date(dateString);
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday
    return (day === 0 || day === 6) ? "weekend" : "not a weekend";
}

// Test
console.log(is_weekend('Nov 15, 2014')); // Saturday
console.log(is_weekend('Nov 16, 2014')); // Sunday
console.log(is_weekend('Nov 17, 2014')); // Monday
