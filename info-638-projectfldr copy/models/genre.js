// const genres = [                            //Defining my genres within objects in an array 
//     {genreName: "Fantasy"},
//     {genreName: "Science Fiction"}, 
//     {genreName: "Non-Fiction"}, 
//     {genreName: "Fiction"}, 
//     {genreName: "Historical"}, 
//     {genreName: "Historical Fiction"}, 
// ];
const db = require('../database');

exports.all = async () => {
 const { rows } = await db.getPool().query("select * from genres order by id");
 return db.camelize(rows);
}
// exports.all = genres;                      //creating the format that my route will use to access the data

exports.add = async (genre) => {
 await db.getPool().query("insert into genres (name) values ($1);",
   [genre.name]);
};

// exports.add = (genre) => {                 //function to add new genres
//     genres.push(genre);
// };

exports.get = async (id) => {
 const { rows } = await db.getPool().query("select * from genres where id = $1", [id])
 return db.camelize(rows)[0]
};
// exports.get = (idx) => {                   //function to access the indexes of my genres
//     return genres[idx];
// };
exports.upsert = (genre) => {              //function to edit an existing genre using the index that will only create a new genre if the input genre id does not match an existing one
    if (genre.id) {
        exports.update(genre);
    } else {
        exports.add(genre);
    }
};

exports.update = async (genre) => {
 await db.getPool().query("update genres set name = $1, where id = $2;",
   [genre.name, genre.id]);
}

// exports.update = (genre) => {              //function that changes the input genres id to match the id of the genre it is editing
//     genres[genre.id] = genre;
// };