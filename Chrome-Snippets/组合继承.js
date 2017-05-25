function SuperType(name){
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name, age){
    // 继承属性
    SuperType.call(this, name);
    this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    console.log(this.age);
}

var instance1 = new SubType('bruce', 23);
instance1.colors.push('black');
console.log(instance1.colors);
instance1.sayAge()
instance1.sayName();

var instance2 = new SubType('mike', 28);
console.log(instance2.colors);
instance1.sayAge()
instance1.sayName();

/*
组合继承最大的问题就是在创建子类实例时，无论什么情况下，
都会调用**两次**超类的构造函数，这将会导致效率低下。
而且子类的原型对象和其实例会中有重复的属性，
解决方法是：不必为了指定子类的原型而调用超类的构造函数，
我们所需的不过就是超类原型对象的一个副本而已。
修改方法如下：
*/
function Extend(subType, superType){
    function FTemp(){};
    FTemp.prototype = superType.prototype;
    var temp = new FTemp();
    //创建一个临时中间对象
    temp.constructor = subType;
    subType.prototype = temp;
}
Extend(SubType, SuperType);
SubType.prototype.sayAge = function(){
    console.log(this.age);
}
var instance3 = new SubType('cater', 25);
console.log(instance3.colors);
instance3.sayAge()
instance3.sayName();
