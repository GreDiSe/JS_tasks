let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var date = new Date();

console.log('Today is: ' + days[date.getDay()] );
let hour = (date.getHours() < 12) ? date.getHours() + 'AM' : date.getHours() - 12 + 'PM';
console.log('Current time is: ' + hour + ' : ' + date.getMinutes() + ' : ' + date.getSeconds() );

