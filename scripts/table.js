class Table {
    constructor(row, col, mine) {
        this.col = col;
        this.row = row;
        this.mine = mine;
        this.container = document.getElementById('container')
    }
}

Table.prototype.createTable = function () {

    this.container.style.width = this.col * 28 + 'px';
    this.container.style.margin = '0 auto';
    this.container.style.border = '1px solid black';

    for(let i = 0; i < this.row; i++){
        let tr = document.createElement('tr');
        this.container.appendChild(tr);
        for(let j = 0; j < this.col; j++){
            let td = document.createElement('td');
            td.className = 'td';
            tr.appendChild(td);
        }
    }
};

Table.prototype.removeTable = function () {
    this.container.innerHTML = '';
};
function showAllTable() {
    for(let i = 0; i < mtr.length; i++){
        for(let j = 0; j < mtr[i].length; j++){
            if(mtr[i][j].mine){
                let nodeI = document.getElementById('container').childNodes[i];
                let el = nodeI.childNodes[j];
                el.className = 'mine';
            }
            else{
                let nodeI = document.getElementById('container').childNodes[i];
                let el = nodeI.childNodes[j];
                el.innerHTML = mtr[i][j].value;
            }
        }
    }
}
function showPart(i,j){
    console.log('i: ' + i + ' j: ' + j);
    if(mtr[i][j].mine || mtr[i][j].opened) return;
    document.getElementById('container').childNodes[i].childNodes[j].innerHTML = mtr[i][j].value;
    mtr[i][j].opened = true;
    if(mtr[i][j].value) return;

    if(i > 0) showPart(i-1,j);
    if(i > 0 && j > 0) showPart(i-1,j-1);
    if(i > 0 && j < mtr[0].length-1) showPart(i-1,j+1);
    if(j < mtr[0].length-1) showPart(i,j+1);
    if(j > 0) showPart(i,j-1);
    if(i < mtr.length-1) showPart(i+1,j);
    if(i < mtr.length-1 && j < mtr[0].length-1) showPart(i+1,j+1);
    if(i < mtr.length-1 && j > 0) showPart(i+1,j-1);
}