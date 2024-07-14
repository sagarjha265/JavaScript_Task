function text_truncate(str, length = str.length, ellipsis = '…') {
    return str.length > length ? str.slice(0, length - ellipsis.length) + ellipsis : str;
}

// Test Data
console.log(text_truncate('We are doing JS string exercises.'));           // "We are doing JS string exercises."
console.log(text_truncate('We are doing JS string exercises.', 19));       // "We are doing JS ..."
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // "We are doing !!"
