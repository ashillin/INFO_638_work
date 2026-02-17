const booksByAuthors = {
"Homer": {
    "The Iliad": {
        title: "The Iliad",
        description: "An ancient Greek epic poem set during the Trojan War.",
        language: "Greek"
    },
    "The Odyssey": {
        title: "The Odyssey",
        description: "A Greek epic poem about Odysseus's journey home after the fall of Troy.",
        language: "Greek"
    }
},
"Ovid": {
    "Metamorphoses": {
        title: "Metamorphoses",
        description: "A narrative poem comprising various mythological and historical stories.",
        language: "Latin"
    }
},
"Virgil": {
    "The Aeneid": {
        title: "The Aeneid",
        description: "A Latin epic poem that tells the legendary story of Aeneas.",
        language: "Latin"
    }
}
};


let input = process.argv[2]
let output = []

for (const author in booksByAuthors) {
    // console.log(author);
 const books = booksByAuthors[author];
 for (const bookTitle in books) {
   console.log(bookTitle)
   const book = books[bookTitle];
   // console.log(book.language);
   if (book.language === input) {
     output.push({
       author: author,
       title: book.title
     })
   }
 }
}

output.forEach((book)=>{console.log(book.author, book.title)})
