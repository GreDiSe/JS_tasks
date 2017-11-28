console.log(randEl([1,2,3,4,5,6,7,8,9,0]))
function randEl(ar) {
    let rand = Math.floor(Math.random() * ar.length);
    return ar[rand]
}