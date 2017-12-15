function showAllTable() {
    for(let i = 0; i < mtr.length; i++){
        for(let j = 0; j < mtr[i].length; j++){
            if(mtr[i][j].mine && !mtr[i][j].flag){
                let nodeI = document.getElementById('container').childNodes[i];
                let el = nodeI.childNodes[j];
                el.className = 'mine';
            }
            else if(mtr[i][j].mine && mtr[i][j].flag){
                let nodeI = document.getElementById('container').childNodes[i];
                let el = nodeI.childNodes[j];
                el.className = 'flag';
            }
            else if(!(mtr[i][j].mine) && mtr[i][j].flag){
                let nodeI = document.getElementById('container').childNodes[i];
                let el = nodeI.childNodes[j];
                el.className = 'noMine';
            }
            else{
                let nodeI = document.getElementById('container').childNodes[i];
                let el = nodeI.childNodes[j];
                el.innerHTML = mtr[i][j].value;
                let value = (mtr[i][j].value === 0) ? '' : mtr[i][j].value;
                el.innerHTML = value;
                el.style.backgroundColor = 'lightgrey';
                if(value > 0) el.style.backgroundColor = 'lightgreen';
            }
        }
    }
}
function showPart(i,j){
    if(mtr[i][j].mine || mtr[i][j].opened || mtr[i][j].flag) return;

    let value = (mtr[i][j].value === 0) ? '' : mtr[i][j].value;
    document.getElementById('container').childNodes[i].childNodes[j].innerHTML = value;
    document.getElementById('container').childNodes[i].childNodes[j].style.backgroundColor = 'lightgrey';
    if(value > 0) document.getElementById('container').childNodes[i].childNodes[j].style.backgroundColor = 'lightgreen';


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
function checkResult() {
    for(let i = 0; i < mtr.length; i++){
        for(let j = 0; j < mtr[i].length; j++){
            if(mtr[i][j].mine !== mtr[i][j].flag) return false;
        }
    }
    return true;
}