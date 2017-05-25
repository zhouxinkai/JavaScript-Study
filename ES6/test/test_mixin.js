import { traits } from 'traits-decorator';
const object = {};
class ClassTest{
    test() {
       return this;
   }
}

@traits(object, ClassTest)
class Target{}
const target = new Target();
console.log(target.test() == target);
// 输出true
/* 
另外在引用第三方Mixin模块Trait时,
要特别注意ClassTest方法中的this是指向Target的实例target的
*/