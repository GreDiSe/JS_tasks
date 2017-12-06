function MyPromise(fn) {
    let me = this;
    let value;
    this.ResolveCallBack = [];
    this.RejectCallBack = [];
    let status = 'pending';

    fn(onResolve, onReject);

    function onResolve(inf) {
        status = 'resolved';
        value = inf;
        me.ResolveCallBack.forEach(handler);
    }
    function onReject(er) {
        status = 'rejected';
        value = er;
        me.RejectCallBack.forEach(handler);
    }
    function handler(current) {
        if(!current) return;
        if(status === 'pending') me.ResolveCallBack.push(current);
        else current(value);
    }
}

MyPromise.prototype.then = function (resolve, reject) {

    if(resolve) this.ResolveCallBack.push(resolve);
    if(reject) this.RejectCallBack.push(reject);

    return this;
};
MyPromise.prototype.catch = function (reject) {
    if(reject) this.RejectCallBack.push(reject);
}
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
    .then(info => console.info('1: ' + info))
    .catch(er => console.error('1: ' + er));
p2
    .then(info => console.info('2: ' + info))
    .catch(er => console.error('2: ' + er));
p3
    .then(info => console.info('3: ' + info))
    .catch(er => console.error('3: ' + er));
