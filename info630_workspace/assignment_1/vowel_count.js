const countVowels = (text) => {
    let vowels = ["a","e","i","o","u"];
    let i=0;
    for (let x of text) {
        if (vowels.includes(x)) i++;
    }
    return i;
    // defining what vowels are and using the array search method includes() to check each element of the provided string to find what I have defined as a vowel 
}
const input = process.argv[2];
if (isNaN(input)) {
    console.log(`The amount of voewls in "${input}" is ${countVowels(input)}.`)
}   else{
    console.log("Please provide a valid string.")
    // error message to account for e=inputs tat aren't strings
}