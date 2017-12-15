class Matrix{
    constructor(obj = {row: 0, col: 0, mine: 0}){
        this.row = obj.row;
        this.col = obj.col;
        this.mine = obj.mine;
    }
    createEmptyMatrix(){
        let result = [];
        for(let i = 0; i < this.row; i++){
            result[i] = [];
            for(let j = 0; j < this.col; j++){
                result[i][j] = {
                    opened: false,
                    mine: false,
                    value: 0,
                    flag: false,
                    out: false
                }
            }
        }
        return result;
    }
    createMatrix() {
        let result = this.createEmptyMatrix(); //Создает пустую матрицу
        let mineIndex = this.getIndex(this.randomMine()); // Получаем массив индексив бомб

        mineIndex.forEach(function (cur) {
            result[cur.i][cur.j].mine = true;

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
    randomMine() { //Создает массив со случайными значениями
        let result = [];
        for (let i = 0; i < this.mine; i++){
            let rand = Math.floor(Math.random() * this.col * this.row);
            if(result.indexOf(rand) === -1) result.push(rand);
            else i--;
        }
        return result;
    };
    getIndex(array) { // Переводит массив со случайными значениями в индексы
        let result = [];
        array.forEach(cur =>{
            let j = 0;
            while (cur >= this.row){
                cur -= this.row;
                j++;
            }
            result.push({i: cur, j: j});
        });
        return result;
    };
    static prepareForView(mtr) {
        mtr.forEach(row => {
            row.forEach(cur => {
                if(cur.mine && !cur.flag) cur.out = 'mine';
                else if(cur.mine && cur.flag) cur.out = 'flag';
                else if(!cur.mine && cur.flag) cur.out = 'noMine';
                else cur.out = cur.value ? 'value' : 'noValue';
            })
        })
    }
    static checkResult(mtr) {
        let res = true;
        mtr.forEach(row => {
            row.forEach(cur => {
                if(cur.mine !== cur.flag) res = false;
            })
        });
        return res;
    }
    static prepareForPartView(mtr) {
        return function showPart(i,j) {
            if(mtr[i][j].mine || mtr[i][j].opened || mtr[i][j].flag) return;
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
        };
    }
}

