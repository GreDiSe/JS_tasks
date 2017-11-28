let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
function sortObject(ar) {
    ar.sort(objSort);
    return ar;
}
function objSort(a,b) {
    return a.author < b.author
}
console.log(sortObject(library))