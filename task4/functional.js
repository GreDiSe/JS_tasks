function MyPromise(fn){
    var value = null;
    var ResolveCallBack = [];
    var RejectCallBack = [];
    var status = 'pending';
    fn(onResolve, onReject);
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
    this.then = function (resolve, reject) {
        if(resolve) ResolveCallBack.push(resolve);
        if(reject) RejectCallBack.push(reject);
        return this;
    };
    this.catch = function (reject) {
        if(reject) RejectCallBack.push(reject);
    }
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
