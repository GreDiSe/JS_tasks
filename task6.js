function arSort(ar)
{
    for (let i = 0; i < ar.length - 1; i++)
    {
        for(let j = i + 1; j < ar.length; j++){
            if (ar[i] > ar[j]){
                let tmp = ar[j];
                ar[j] = ar[i];
                ar[i] = tmp;
            }
        }
    }
    return ar;
}

console.log(arSort([6,4,0, 3,-2,1]));