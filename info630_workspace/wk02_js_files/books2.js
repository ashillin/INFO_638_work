const books = [
    ['The Iliad', 'Homer'], 
    ['The Odyssey', 'Homer'], 
    ['Metamorphoses', 'Ovid'], 
    ['The Aeneid', 'Virgil'] ];

// Get the author name from command line argument
const authorName = process.argv[2];

// Check if authorName is provided
if (!authorName) {
    console.log("Please provide an author name.");
} else {
    // Filter the books by the provided author and print the titles
    const filteredBooks = books.filter(book => book[1] === authorName);
    if (filteredBooks.length === 0) {
        console.log(`No books found by ${authorName}.`);
    } else {
        console.log(`Books by ${authorName}:`);
        filteredBooks.forEach(book => console.log(book[0])); // book[0] is the title
    }
}

