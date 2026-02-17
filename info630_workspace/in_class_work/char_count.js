function countCharacters (str){
    return str.length;
}

const inputString = process.argv[2];

if (inputString) { 
    const characterCount = countCharacters(inputString);
    console.log (`The number of characters in ${inputString} is ${characterCount}.`);
}   else {
    console.log ("Please provide string as input.");
}