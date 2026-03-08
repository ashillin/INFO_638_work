const books = [
    {title: "A Song of Fire and Ice", publishingYear: 1996, authorIds: ["0"], genreIds: ["0", "3"]},
    {title: "Convergence", publishingYear: 2019, authorIds: ["1"], genreIds: ["1"]},
    {title: "Bleed the Block", publishingYear: 2026, authorIds: ["2"], genreIds: ["5", "0"]},
    {title: "Unionizing", publishingYear: 2024, authorIds: ["3"], genreIds: ["2", "4"]},
    {title: "Leviathan Wakes", publishingYear: 2011, authorIds: ["4"], genreIds: ["1"]},
    {title: "Caliban’s War", publishingYear: 2012, authorIds: ["5"], genreIds: ["1"]}
];

exports.all = books;
exports.add = (book) => {
    books.push(book);
};
exports.get = (idx) => {
  return books[idx];
};
exports.upsert = (book) => {
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
};
exports.update = (book) => {
  books[book.id] = book;
};
