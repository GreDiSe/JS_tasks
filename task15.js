let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

function color_s(n) {
    return (n < 3) ? ((n + 1 + o[n + 1]) + ' choice is ' + color[n]) : ((n + 1 + o[0]) + ' choice is ' + color[n]);
}
color.forEach(function (cur, i, color) {
    console.log(color_s(i))
});
