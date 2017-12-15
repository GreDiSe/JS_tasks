function open(i,j) {

    if(consoleMtr[i][j].mine) {
        console.log("Ты проиграл, лол");
        Matrix.prepareForView(consoleMtr);
        MyConsole.showAllConsoleTable(consoleMtr);
        return;
    }

    Matrix.prepareForPartView(consoleMtr)(i, j)
    MyConsole.showConsoleTable(9,9)
}
function flag(i, j) {

    if(Matrix.checkResult(consoleMtr)){
        console.log("Да как ты выиграл, то?");
        return;
    }

    consoleMtr[i][j].flag = true;
    MyConsole.showConsoleTable(9,9)
}