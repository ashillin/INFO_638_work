const comments = [                  //Defining my comments within objects in an array
{id: "0", bookId: "0", userEmail: "rvanmech@pratt.edu", text: "I would love to read this!!"},
{id: "1", bookId: "0", userEmail: "rvanmech@pratt.edu", text: "OMG is just so good, i hope it stays this way"},
{id: "2", bookId: "0", userEmail: "rvanmech@pratt.edu", text: "It's so sad that i finished it, what do you think?"},
];
function getNextId() {
return Math.max(...comments.map(c => c.id))+1;
}
exports.add = (comment) => {        //function to add new comments
comment.id = getNextId();
comments.push(comment);
}
exports.update = (comment) => {     //function that changes the input comment's id to match the id of the comment it is editing
comments[comment.id] = comment;
}
exports.upsert = (comment) => {    //function to edit an existing comment using the index that will only create a new comment if the input comment id does not match an existing one
if (comment.id) {
exports.update(comment);
} else {
exports.add(comment);
}
}
exports.get = (id) => {             //function to access the indexes of my comments
return comments.find((comment) => {
return comment.id == id;
});
}
exports.AllForBook = (bookId) => {
return comments.filter((comment) => {
return comment.bookId == bookId;
});
}