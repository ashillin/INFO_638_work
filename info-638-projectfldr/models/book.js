const books = [
    {title: "A Song of Fire and Ice", publishingYear: 1996},
    {title: "Convergence", publishingYear: 2019},
    {title: "Bleed the Block", publishingYear: 2026},
    {title: "Unionizing", publishingYear: 2024},
]

exports.all = books;
exports.add = (book) => {
    books.push(book);
};