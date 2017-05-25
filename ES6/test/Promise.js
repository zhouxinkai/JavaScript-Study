function Promise(fn) {
     // 使用var声明的局部变量、函数声明、形参，都是私有变量
     // 而在this中定义的将成为特权方法，即public方法
     // 注意：this并不指向变量对象，只是this中的特权方法作为闭包有权访问变量对象中的内容
     
    var doneList = [];
    var failList = [];
    var state = 'pending';
    var value;
    //注册回调函数 为什么要加入状态机制呢，因为如果当前的fn已经执行完成了，再去用
    //then绑定回调，就不会执行了，所以加入状态之后，即使已经运行完成也会继续执行回调函数
    this.then = (done, fail) => {
            switch (state) {
                case 'pending':
                    doneList.push(done);
                    failList.push(fail);
                    return this;
                    break;
                case 'fulfilled':
                    var ret = done(value);
                    ret instanceOf Promise ? return ret : return this;
                    break;
                case 'rejected':
                    var ret = fail(value);
                    ret instanceOf Promise ? return ret : return this;
                    break;
            }
        }
    //更改对象状态为‘resolved’并执行成功回调
    function resolve(newValue) {
        value = newValue;
        state = 'fulfilled';
        //使用setTimeout的原因是如果fn不是异步的，在fn瞬间运行完成，resolve也会立刻运行，
        //但是这时候doneList还是空的，所以我们要等待then添加完成，使用setTiemout强行将
        //函数的运行放到第一次循环之后运行
        setTimeout(function() {
            doneList.forEach(done => {
                done(newValue);
            })
        }, 0);
    }

    //更改对象状态为‘rejected’并执行失败回调
    function reject(err) {
        value = err;
        state = 'rejected';
        // Promise对象的状态在创建Promise对象的时候就已经决定好了，
        // 若调用了reject函数，则状态为rejected
        // 若调用了resolve函数，则状态为resolved
        setTimeout(function() {
            failList.forEach(fail => {
                fail(err);
            })
        }, 0);
    }

    fn(resolve, reject);
}
 
 
//测试
var p = new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('done');
        //resolve('messsage');
        reject('fail');
    }, 3000)
})
p.then(function(message) {
    console.log('then1:', message);
}, function(err) {
    console.log('then1err:', err);
}).then(function(message) {
    console.log('then2:', message);
}, function(err) {
    console.log('then2err:', err);
})
