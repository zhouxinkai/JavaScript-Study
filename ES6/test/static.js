// 静态方法
class Foo{
	static classMethod(){
		console.log('hello');
	}
}
Foo.classMethod();

// 静态属性
class Bar{
	static myStaticProp = "42";
	constructor(){
		console.log(Bar.myStaticProp);
	}
}
let bar = new Bar();

// 实例属性
class MyClass{
	myProp = "42";
	constructor(){
		// this.myProp = "42";
		console.log(this.myProp);
	}
}
let myClass = new MyClass();