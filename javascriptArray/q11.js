function max_date(dates) {
    return new Date(Math.max(...dates.map(date => new Date(date)))).toISOString().split('T')[0].replace(/-/g, '/');
}

function min_date(dates) {
    return new Date(Math.min(...dates.map(date => new Date(date)))).toISOString().split('T')[0].replace(/-/g, '/');
}

// Test Data
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // Output: "2015/02/02"
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // Output: "2015/01/03"
