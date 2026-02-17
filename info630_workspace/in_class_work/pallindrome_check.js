let strReverse = (newWord) => {
    return newWord.split('').reverse().join('');
}
let  inputString = process.argv[2];
let reversedStr = strReverse(inputString)
    console.log(`"${inputString}" is a pallondrome ${inputString==reversedStr}`)