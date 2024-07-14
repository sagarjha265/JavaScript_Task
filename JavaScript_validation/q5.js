function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ');
}

// Test
console.log(trimString("   Hello   World!   ")); // "Hello World!"
