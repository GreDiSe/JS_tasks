let mtr, consoleMtr;
function main(obj) {
    mtr = new Matrix(obj);
    mtr = mtr.createMatrix();
}
function createConsole() {
    consoleMtr = new Matrix({row: 9, col: 9, mine: 10});
    consoleMtr = consoleMtr.createMatrix();
    MyConsole.showConsoleTable(9,9)
}