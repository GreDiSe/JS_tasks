function MyPromise(fn){
    this.value = null;
    this.ResolveCallBack = [];
    this.RejectCallBack = [];
    this.status = 'pending';
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    this.handler = this.handler.bind(this);
    fn(this.onResolve, this.onReject);
}
MyPromise.prototype.onResolve = function(inf) {
    this.status = 'resolved';
    this.value = inf;
    this.ResolveCallBack.forEach(this.handler);
};
MyPromise.prototype.onReject = function(er) {
    this.status = 'rejected';
    this.value = er;
    this.RejectCallBack.forEach(this.handler);
};
MyPromise.prototype.handler = function(current) {
    if(!current) return;
    if(this.status === 'pending') this.ResolveCallBack.push(current);
    else current(this.value);
};
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
            if(Math.random() > 0.5) resolve('Правда ');
            else reject('Неправда ');
        }, 1000);
    });
}

var p1 = foo('1');
var p2 = foo('2');
var p3 = foo('3');

p1
    .then(info => console.info('1: ' + info))
    .catch(er => console.error('1: ' + er));
p2
    .then(info => console.info('2: ' + info))
    .catch(er => console.error('2: ' + er));
p3
    .then(info => console.info('3: ' + info))
    .catch(er => console.error('3: ' + er));
