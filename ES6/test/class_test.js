class Point{
	static myProp = 42;
	static classMethod(){
		console.log('hello', this.myProp);
	}
}

Point.classMethod();