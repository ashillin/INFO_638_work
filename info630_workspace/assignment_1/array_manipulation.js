const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        yearPublished: 1925,
        genre: "Fiction"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960,
        genre: "Fiction"
    },
    {
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949,
        genre: "Dystopian Fiction"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        yearPublished: 1813,
        genre: "Classic Romance"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        yearPublished: 1951,
        genre: "Literary Fiction"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        yearPublished: 1954,
        genre: "Fantasy"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        yearPublished: 1997,
        genre: "Fantasy"
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        yearPublished: 1979,
        genre: "Science Fiction Comedy"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        yearPublished: 1932,
        genre: "Dystopian Fiction"
    }// More books can be added here
];
const bookYear = process.argv[2];
const output = [];
// Created the user input and empty array where my new array will go.
for (const book of books) {
        const year = book.yearPublished;
        const title = book.title; 
        // defining the sections of books that I want to target
   if ( year > bookYear) {
     output.push({
       title,
       year
        // comparing the yearPublished element of each array index to the user input and putting the elements that match the condition into a new array
     })
   }
}

if (bookYear > 1997) {
    console.log(`No books published after ${bookYear}`);
    } else if (bookYear < 1813) {
    console.log(`No books published before ${bookYear}`)
        } else if (isNaN(bookYear)) {
    console.log("Please provide a valid year");
                // Error messages to account for any inputs of years that we do not have and any inputs that are not numbers
            } else {
                console.log(`Books published after ${bookYear}:`)
                // separation to create linebreak between each returned entry else "Books published after (bookYear):" will continue to repeat because of forEach
                output.forEach((book)=>{console.log(`${book.title}, ${book.year}`)});
            }   