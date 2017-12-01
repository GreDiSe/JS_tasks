class Matrix{
    constructor(obj){
        this.row = obj.row;
        this.col = obj.col;
        this.mine = obj.mine;
    }
}

Matrix.prototype.createEmptyMatrix = function() {
    let result = [];
    for(let i = 0; i < this.row; i++){
        result[i] = [];
        for(let j = 0; j < this.col; j++){
            result[i][j] = {
                opened: false,
                mine: false,
                value: 0,
                flag: false
            }
        }
    }
    return result;
};
Matrix.prototype.createMatrix = function () {
    let result = this.createEmptyMatrix(); //Создает пустую матрицу
    let mineIndex = this.getIndex(this.randomMine()); // Получаем массив индексив бомб

    console.log(result);
    mineIndex.forEach(function (cur) {
        result[cur.i][cur.j].mine = true;
        console.log('i: ' + cur.i + ' j: ' + cur.j);
        if(cur.i > 0) result[cur.i-1][cur.j].value++;
        if(cur.i > 0 && cur.j > 0) result[cur.i-1][cur.j-1].value++;
        if(cur.i > 0 && cur.j < result[0].length-1) result[cur.i-1][cur.j+1].value++;
        if(cur.j < result[0].length-1) result[cur.i][cur.j+1].value++;
        if(cur.j > 0) result[cur.i][cur.j-1].value++;
        if(cur.i < result.length-1) result[cur.i+1][cur.j].value++;
        if(cur.i < result.length-1 && cur.j < result[0].length-1) result[cur.i+1][cur.j+1].value++;
        if(cur.i < result.length-1 && cur.j > 0) result[cur.i+1][cur.j-1].value++;
    });
    return result;
};
Matrix.prototype.randomMine = function () { //Создает массив со случайными значениями
    let result = [];
    for (let i = 0; i < this.mine; i++){
        let rand = Math.floor(Math.random() * this.col * this.row);
        if(result.indexOf(rand) === -1) result.push(rand);
    }
    return result;
};
Matrix.prototype.getIndex = function (array) { // Переводит массив со случайными значениями в индексы
    let result = [];
    for(let k = 0; k < array.length; k++) {
        let j = 0;
        while (array[k] >= this.row){

            array[k] -= this.row;
            j++;
        }
        result.push({i: array[k], j: j});
    }
    return result;
};