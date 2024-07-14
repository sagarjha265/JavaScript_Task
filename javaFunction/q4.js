function AlphabeticalString(str){
    return str.split('').sort().join('');
}
const exampleString = 'DANGER'
const result = AlphabeticalString(exampleString);
console.log(result);