document.getElementById('choseMode').onclick = function (e) {

    if(e.target.tagName !== 'BUTTON') return;

    document.getElementById('result').innerHTML = '';
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
    if(mtr[i][j].flag) return;
    let value = (mtr[i][j].value === 0) ? '' : mtr[i][j].value;
    e.target.innerHTML = (mtr[i][j].mine) ? '' : value;

    Table.showPart(i,j);

    if(mtr[i][j].mine) {
        document.getElementById('result').innerHTML = 'Сорри не сегодня, ты проиграл';
        Matrix.prepareForView(mtr);
        Table.showAllTable(mtr);
    }
});
document.getElementById('container').addEventListener('contextmenu', function (e) {
    event.preventDefault();

    if(e.target.tagName !== 'TD') return;

    let i  = findIJ(e.target).i;
    let j = findIJ(e.target).j;

    if(e.target.textContent) return;
    mtr[i][j].flag = !mtr[i][j].flag;
    if(mtr[i][j].flag) e.target.className = 'flag';
    else e.target.className = 'td';

    if(Matrix.checkResult(mtr)) {
        document.getElementById('result').innerHTML = 'Поздровляю с победой';
        Matrix.prepareForView(mtr);
        Table.showAllTable(mtr);

        return false;
    }

});
function findIJ(btn)
{
    let res = {};
    mtr.forEach((row, i) =>{
        row.forEach((cur, j) =>{
            if(document.getElementById('container').childNodes[i].childNodes[j] === btn){
                res = {i:i, j:j}
            }
        })
    });
    return res;
}