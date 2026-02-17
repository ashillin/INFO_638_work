function area(r){
    return Math.PI*(r**2);
}
let input = process.argv[2];
let result = area(input);

console.log(`The area of my circle with a radius of ${input} is ${result}`);