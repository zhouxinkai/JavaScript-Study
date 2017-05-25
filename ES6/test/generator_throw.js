
var g = function* (){
	while (true) {
		try {
			console.log('test1111111111111');
			yield;
			console.log('test222222222222');
		} catch(e){
			console.log('内部捕获1',e);
			if(e != 'a') throw e;
			console.log('内部捕获2',e);
		}
	}
};

var i = g();
i.next();

try{
	i.throw('a');
	i.throw('c');
} catch(e){
	console.log('外部捕获',e);
}

i/*function* foo(){
	var x = yield 3;
	var y = yield x.toUpperCase();
	yield y;
}

var it = foo();
var ret = it.next();
console.log(ret);

try{
	ret = it.next(42);
	conslole.log('这句话并没有被执行');
}catch(err){
	console.log(ret);
	console.log(err);
}*/