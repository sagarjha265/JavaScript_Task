function isValidDomain(domain) {
    const regex = /^(?!-)([a-zA-Z0-9-]{1,63}(?<!-)\.)+[a-zA-Z]{2,}$/;
    return regex.test(domain);
}

// Test
console.log(isValidDomain("example.com")); // true
console.log(isValidDomain("-example.com")); // false
