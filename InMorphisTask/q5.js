function rotatestring(str) {
    let word = str.split('');

    // Remove the last character and prepend it to the front
    let leastword = word.pop();
    word.unshift(leastword);

    // Join the array back into a string and return it
    let rotrateWord = word.join('');
    return rotrateWord;
}

let originalString = 'w3resource';
console.log(`Original string: ${originalString}`);

let rotations = 5;
for (let i = 1; i <= rotations; i++) {
    originalString = rotatestring(originalString);
    console.log(`Rotation ${i}: ${originalString}`);
}
