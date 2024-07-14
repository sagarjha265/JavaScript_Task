function isValidURL(url) {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/\S*)?$/;
    return regex.test(url);
}

// Test
console.log(isValidURL("https://www.example.com")); // true
