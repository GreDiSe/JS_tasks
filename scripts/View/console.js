class MyConsole{
    static showAllConsoleTable(mtr) {
        let curRow = '';
        mtr.forEach(row => {
            row.forEach(cur => {
                if (cur.out === 'flag') curRow += 'F';
                else if (cur.out === 'mine') curRow += 'M';
                else if (cur.out === 'noMine') curRow += 'A';
                else if (cur.value) curRow += cur.value;
                else curRow += '_';
                curRow += ' ';
            });
            curRow += '\n';
        });
        console.log(curRow)
        console.log('\nF - flag \nM - mine \nA - absent mine \n_ - absent value ( 0 )')
    }
    static showConsoleTable() {
        let result = '   0.1.2.3.4.5.6.7.8\n';
        consoleMtr.forEach((row, i) =>{
            result += i + '. ';
            row.forEach(cur =>{
                if(cur.flag) result += 'F ';
                else if(cur.opened){
                    if(cur.value) result += cur.value + ' '
                    else result += '_' + ' ';
                }
                else result += '*' + ' '
            });
            result += '\n';
        });
        console.log(result)
    }
}


