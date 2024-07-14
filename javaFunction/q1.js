function reverseNum(num){

    let word = num.toString().split('').reverse().join('');

    let reverseword = parseInt(word);
    return reverseword ;
}
let number = 32243;
reverse = reverseNum (number);

console.log(`original num ${number}`);
console.log(`after reverse ${reverse}`);

