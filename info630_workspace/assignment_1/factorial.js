let num = process.argv[2];
function factorial(n) {
    for (i=1; i<n; i++) {
    num *= i;
    // defining how I want the function to repeat itself in order to get the factorial of the input number
    // making sure expression 2 in the for loop is "i<n" and not "i<=n" because if it is "i<=n" then the factorial will multiply the input number a second time i.e. factorial 6 become 4320 instead of 720
    }
    return num;
}
    if (num > 0) {
        console.log(`The factorial of ${num} is ${factorial(num)}`);
    } else if (num = isNaN || num <= 0) {
        // using the logic symbol for "or" to account for both non-number entries and negative number entries
        console.log("Please enter a positive integer.");
    }