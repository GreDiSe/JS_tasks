function MyPromise(fn){
    this._value = null;
    this._ResolveCallBack = [];
    this._RejectCallBack = [];
    this._status = 'pending';
    this._onResolve = this._onResolve.bind(this);
    this._onReject = this._onReject.bind(this);
    this._handler = this._handler.bind(this);
    fn(this._onResolve, this._onReject);
}
MyPromise.prototype._onResolve = function(inf) {
    this._status = 'resolved';
    this._value = inf;
    this._ResolveCallBack.forEach(this._handler);
};
MyPromise.prototype._onReject = function(er) {
    this._status = 'rejected';
    this._value = er;
    this._RejectCallBack.forEach(this._handler);
};
MyPromise.prototype._handler = function(current) {
    if(!current) return;
    if(this._status === 'pending') this._ResolveCallBack.push(current);
    else current(this._value);
};
MyPromise.prototype.then = function (resolve, reject) {
    if(resolve) this._ResolveCallBack.push(resolve);
    if(reject) this._RejectCallBack.push(reject);
    return this;
};
MyPromise.prototype.catch = function (reject) {
    if(reject) this._RejectCallBack.push(reject);
}
function foo() {
    return new MyPromise(function(resolve, reject){
        setTimeout(function () {
            if(Math.random() > 0.5) resolve('Правда ');
            else reject('Неправда ');
        }, 1000);
    });
}

var p1 = foo('1');
var p2 = foo('2');
var p3 = foo('3');

p1
    .then(function(info) { console.info('1: ' + info)})
    .catch(function(er) {console.error('1: ' + er)});
p2
    .then(function(info) { console.info('2: ' + info)})
    .catch(function(er) {console.error('2: ' + er)});
p3
    .then(function(info) { console.info('3: ' + info)})
    .catch(function(er) {console.error('3: ' + er)});