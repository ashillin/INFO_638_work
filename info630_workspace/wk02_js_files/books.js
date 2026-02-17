const books = ['The Iliad', 'The Odyssey', 'Metamorphoses', 'The Aeneid'];

console.log("number of books: ", books.length);
console.log(books);

console.log("the second book is: ", books[1]);

books.pop(); // removes last element
console.log("popping an element: ", books);

books.push("Crime and Punishment");  // adds to the end of an array
console.log("pushing a new element", books);

books.reverse();  // reverse the order of elements
console.log("reversing the array: ", books);

const books2 = books.slice(2);  // create a new array
console.log("source array after slice: ", books);
console.log("new sliced array: ", books2);