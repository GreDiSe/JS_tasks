var form = document.getElementById('form')
form.onclick = function (event) {
    if(event.target.tagName !== 'BUTTON') return;
    let a = Number(form.first.value);
    let b = Number(form.second.value);
    document.getElementById('result').innerHTML = 'Result is: ' + ((event.target.textContent === 'Multiply') ? (a*b) : (a/b));
    return false;
};
