document.getElementById('choseMode').onclick = function (e) {
    if(e.target.tagName !== 'BUTTON') return;

    let row = Number(e.target.getAttribute('data-row'));
    let col = Number(e.target.getAttribute('data-col'));
    let mine = Number(e.target.getAttribute('data-mine'));

    let table = new Table(row, col, mine);
    table.removeTable();
    table.createTable();

    main(table);
};

document.getElementById('container').addEventListener('click', function (e) {
    if(e.target.tagName !== 'TD') return;

    let i  = findIJ(e.target).i;
    let j = findIJ(e.target).j;
    e.target.innerHTML = (mtr[i][j].mine) ? '' : mtr[i][j].value;

    showPart(i,j);

    if(mtr[i][j].mine) showAllTable();
});
function findIJ(btn)
{
    for(let i = 0; i < mtr.length; i++){
        for(let j = 0; j < mtr[i].length; j++){
            if(document.getElementById('container').childNodes[i].childNodes[j] === btn){
                return {i:i, j:j}
            }
        }
    }
}