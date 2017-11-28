console.log(longest_common_starting_substring(['goosf', 'google']));

function longest_common_starting_substring([str1, str2]) {
    let min = str1.length > str2.length ? str2.length : str1.length;
    let maxAr = str1.length > str2.length ? str1 : str2;
    let minAr = str1.length < str2.length ? str1 : str2;
    for(let i = min; i > 0; i--){
        if(maxAr.indexOf(minAr.substring(0, i)) !== -1){
            return minAr.substring(0, i);
        }
    }
}