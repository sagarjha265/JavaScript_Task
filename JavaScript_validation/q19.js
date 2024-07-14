function isHTML(str) {
    const regex = /<("[^"]*"|'[^']*'|[^'">])*>/;
    return regex.test(str);
}

// Test
console.log(isHTML("<div>Hello World</div>")); // true
console.log(isHTML("Just a plain text.")); // false
