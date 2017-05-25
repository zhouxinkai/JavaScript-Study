
function createPrivate(prototype) {
    var privateStore = Symbol('privateStore');
    return function getPrivate(instance) {
         if (!instance.hasOwnProperty(privateStore)) {
             instance[privateStore] = Object.create(prototype || {});
         }
         return instance[privateStore];
     };
}
let $private = createPrivate();

class Test{
	constructor(){
		$private(this).privateProp = 'privateProp';
		// $private(instance),返回instance实例的私有成员存储区域
	}

	test(){
		console.log($private(this).privateProp);
	}
}
let testPrivate = new Test();
testPrivate.test();
testPrivate.privateProp;