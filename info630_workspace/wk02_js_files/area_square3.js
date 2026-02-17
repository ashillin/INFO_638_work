const side = parseFloat(process.argv[2]);

const calculateArea = (side) => {   // function written as arrow function syntax
    let area =side**2;
    return area;
}

if (!isNaN(side) && side > 0) {
    console.log(`area 0f a square with a side of ${side}:`, calculateArea(side));
} else {
    console.log("Please provide a valid, positive value for one side of the square.");
}
