function isOddOrEven(number) {
    return number % 2 === 0 ? 'even' : 'odd';
}
let inputNumber = parseFloat(process.argv[2]);
    if (isNaN(inputNumber)){
    console.log('Please provide a valid number');
}   else {
        const result = isOddOrEven(inputNumber);
        console.log (`The Number ${inputNumber} is ${result}.`);
    }

let input = process.argv[2];
let remainder = input%2;

if (isNaN (remainder)) {
    console.log ('THIS IS NOT A NUMBER!!');
}   else if (remainder == 0) {
    console.log ("This is even.");
}   else {
    console.log ("This is odd");
}