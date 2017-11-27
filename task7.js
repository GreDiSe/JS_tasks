function date() {
    for(let i = 2014; i <= 2050; i++){
        let currentDate = new Date(i, 0, 1);
        if(currentDate.getDay() === 0) console.log(i)
    }
}
date();