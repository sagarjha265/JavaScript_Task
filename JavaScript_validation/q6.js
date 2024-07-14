function countWords(str) {
    const trimmedStr = trimString(str);
    return trimmedStr ? trimmedStr.split(' ').length : 0;
}

// Test
console.log(countWords("  This  is   a test.  ")); // 4
