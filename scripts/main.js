let mtr;
function main(obj) {
    mtr = new Matrix(obj);

    let row = obj.row;
    let col = obj.col;
    let mine = obj.mine;
    let table = new Table(col, row,mine)

    mtr = mtr.createMatrix();
    //table.showAllTable();
}
