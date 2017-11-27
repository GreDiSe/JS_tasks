
var str = 'ivan';
setInterval(function () {
    str = str[str.length - 1] + str.slice(0, -1);
    console.log(str);
}, 500);