let date = new Date();
let next_Cristmas = new Date(date.getFullYear() + 1, 0 ,7);
let koef = 3600 * 24 * 1000;
console.log(Math.floor((next_Cristmas.getTime() / koef) - (date.getTime() / koef)) + ' days');