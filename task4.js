let value;
let status;
let ResolveCallBack = [];
let RejectCallBack = [];
function MyPromise(fn) {
    ResolveCallBack = [];
    RejectCallBack = [];
    value = undefined;
    status = 'pending';
    fn(inf =>  ResolveCallBack.push(onResolve(inf)), er => RejectCallBack.push(onReject(er)));
}

function onResolve(inf) {
    status = 'resolved';
    value = inf;
    ResolveCallBack.forEach(handler);
}
function onReject(er) {
    status = 'rejected';
    value = er;
    RejectCallBack.forEach(handler);
}
function handler(current) {
    if(!current) return;
    if(status === 'pending') ResolveCallBack.push(current);
    else current(value);
}


MyPromise.prototype.then = function (resolve, reject) {
    if(resolve) ResolveCallBack.push(resolve);
    if(reject) RejectCallBack.push(reject);

    return this;
};
MyPromise.prototype.catch = function (reject) {
    if(reject) RejectCallBack.push(reject);
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
    .then(info => console.info('Out: ' + info))
    .catch(er => console.error('Er: ' + er))
// p2
//     .then(info => console.info(info))
//     .catch(er => console.error(er))
// p3
//     .then(info => console.info(info))
//     .catch(er => console.error(er))
