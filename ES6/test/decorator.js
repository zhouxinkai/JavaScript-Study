function testable(target){
	target.isTestable = true;
}

@testable
class MyTestableClass{

}

/*上面的代码等同于
class MyTestableClass{}
MyTestableClass = testable(MyTestableClass) || MyTestableClass;
}*/

console.log(MyTestableClass.isTestable);

class Person{
	getPerson(){
		return this;
	}
}
let person = new Person();
let getPerson = person.getPerson;

console.log(getPerson());