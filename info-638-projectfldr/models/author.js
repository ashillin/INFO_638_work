// const authors = [
//   {firstName: "James", lastName: "S. A. Corey"},
//   {firstName: "Craig", lastName: "Alanson"},
//   {firstName: "Cixin", lastName: "Liu"},
//   {firstName: "James", lastName: "Patterson"},
//   {firstName: "George", lastName: "R. R. Martin"},
//   {firstName: "Walter", lastName: "Rodney"},
// ];
const db = require('../database');
exports.all = async () => {
 const { rows } = await db.getPool().query("select * from authors order by id");
 return db.camelize(rows);
};
// exports.all = authors;
exports.add = async (author) => {
 await db.getPool().query("insert into authors (first_name, last_name) values ($1, $2);",
   [author.firstName, author.lastName]);
};
// exports.add = (author) => {
//     authors.push(author);
// };

exports.get = async (id) => {
 const { rows } = await db.getPool().query("select * from authors where id = $1", [id])
 return db.camelize(rows)[0]
};

// exports.get = (idx) => {
//   return authors[idx];
// };

exports.update = async (author) => {
 await db.getPool().query("update authors set first_name = $1, last_name = $2 where id = $3;",
   [author.firstName, author.lastName, author.id]);
}

// exports.update = (author) => {
//   authors[author.id] = author;
// };
exports.upsert = (author) => {
  if (author.id) {
    exports.update(author);
  } else {
    exports.add(author);
  }
};

exports.allForBook = async (book) => {
  const { rows } = await db.getPool().query(`
    select authors.* from authors
    JOIN authors_books on authors_books.author_id = authors.id
    where authors_books.book_id = $1;`, [book.id]);
  return db.camelize(rows);
};