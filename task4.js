var information;
var status;
function MyPromise(fn) {
    status = 'pending';
    doResolve(fn, onResolve, onReject);
}
function onResolve(inf) {
    status = 'resolved';
    //console.log('inf:' + inf)
    information = inf;
    //console.log('Info: ' + information)
    //console.log(inf);
}
function onReject(error) {
    //console.log(error);
    //console.log('error:' + error)
    information = error;
    status = 'rejected';

}
function doResolve(fn, resolve, reject) {
    fn(inf => resolve(inf), res => reject(res));
}
function done(resolve, reject) {
    console.log('_' + status);
    resolve(information);

}
MyPromise.prototype.then = function (onResolve, onReject) {
    return new MyPromise(function (resolve, reject) {
        return done(function (result) {
                resolve(onResolve(result))
            }, function (error) {
                reject(onReject(error))
            }
        );
    });
};
function foo() {
    return new MyPromise(function(resolve, reject){
        setTimeout(() => {
            if(Math.random() > 0.5) resolve('Правда');
            else reject('Неправда');
        }, 1000);
    });
}

let p1 = foo();
let p2 = foo();
let p3 = foo();

p1
    .then(info => console.info(info));
    // .catch(er => console.error(er));
p2
    .then(info => console.info(info));
//     .catch(er => console.error(er));
p3
    .then(info => console.info(info));
//     .catch(er => console.error(er));

