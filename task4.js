let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

let haveRead = '', read = '';
for(let cur of library){
    if(cur.readingStatus) haveRead += cur.title + ' / ';
    else read += cur.title + ' / '
}
console.log('Книги прочитаны: ' + haveRead);
console.log('Книги не прочитаны: ' + read);