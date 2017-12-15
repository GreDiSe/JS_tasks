class Table {
    constructor(row = 0, col = 0, mine = 0) {
        this.col = col;
        this.row = row;
        this.mine = mine;
        this.container = document.getElementById('container')
    }
    createTable() {

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
    removeTable() {
        this.container.innerHTML = '';
    };
    static showAllTable() {
        let container = document.getElementById('container');
        mtr.forEach((row, i) =>{
            row.forEach((cur,j) =>{
                let el = container.childNodes[i].childNodes[j];
                el.className = cur.out;
                if(cur.out === 'value') el.textContent = cur.value
            })
        })

    }
    static showPartTable() {
        let container = document.getElementById('container');
        mtr.forEach((row, i) =>{
            row.forEach((cur,j) =>{
                if(cur.opened){
                    if(cur.flag){
                        let el = container.childNodes[i].childNodes[j];
                        el.className = 'flag';
                        if(cur.out === 'value') el.textContent = cur.value
                    }
                    else if(cur.value){
                        let el = container.childNodes[i].childNodes[j];
                        el.className = 'value';
                        el.textContent = cur.value;
                    }
                    else {
                        let el = container.childNodes[i].childNodes[j];
                        el.className = 'noValue';
                    }

                }
            })
        })
    }
    static showPart(i, j){
        Matrix.prepareForPartView(mtr)(i,j);
        Table.showPartTable();
    }
}



