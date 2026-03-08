const genres = [                            //Defining my genres within objects in an array 
    {genreName: "Fantasy"},
    {genreName: "Science Fiction"}, 
    {genreName: "Non-Fiction"}, 
    {genreName: "Fiction"}, 
    {genreName: "Historical"}, 
    {genreName: "Historical Fiction"}, 
];
exports.all = genres;                      //creating the format that my route will use to access the data
exports.add = (genre) => {                 //function to add new genres
    genres.push(genre);
};
exports.get = (idx) => {                   //function to access the indexes of my genres
    return genres[idx];
};
exports.upsert = (genre) => {              //function to edit an existing genre using the index that will only create a new genre if the input genre id does not match an existing one
    if (genre.id) {
        exports.update(genre);
    } else {
        exports.add(genre);
    }
};

exports.update = (genre) => {              //function that changes the input genres id to match the id of the genre it is editing
    genres[genre.id] = genre;
};