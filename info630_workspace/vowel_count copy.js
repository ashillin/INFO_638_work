const vowels = ["a","e","i","o","u"]
const numVowels = vowels.filter(vowFunc).length;
let numStr = (newWord) => {
    return newWord.split('');
}
function vowFunc(letter) {
    return letter=vowels;
}
let inputWord = process.argv[2];
for (let i=0; i=""; i++) {
    if (i===inputWord.length) { break; }
    return numVowels;
}
console.log(`${numStr(inputWord)} ${numVowels}`);