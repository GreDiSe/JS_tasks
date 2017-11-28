let library = [
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

function sortAr(obj) {
    return obj.sort(helpSort)
}
function helpSort(a, b) {
    return a.author > b.author;
}

console.log(sortAr(library))