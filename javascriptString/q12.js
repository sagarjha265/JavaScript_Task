function uncamelize(str, separator = ' ') {
    return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}

// Test Data
console.log(uncamelize('helloWorld'));        // "hello world"
console.log(uncamelize('helloWorld', '-'));   // "hello-world"
console.log(uncamelize('helloWorld', '_'));   // "hello_world"
