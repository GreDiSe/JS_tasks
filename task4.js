function foo() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            let r = Math.random() > 0.5;
            if(r) resolve('Правда');
            else reject('Неправда');
        }, 1000);
    });
}

let p1 = foo();
let p2 = foo();
let p3 = foo();

p1
    .then(info => console.info(info))
    .catch(er => console.error(er));
p2
    .then(info => console.info(info))
    .catch(er => console.error(er));
p3
    .then(info => console.info(info))
    .catch(er => console.error(er));

