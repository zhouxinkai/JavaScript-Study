function testArgs(){
//     arguments.slice(1);
    var args1 = Array.prototype.slice.call(arguments, 1);
    console.log(args1);
    var args2 = Array.prototype.slice.call(arguments);
    console.log(args2);
    console.log(args1.concat(args2));
}
(function(a){
    console.log(a);
    var a=10;
    function a(){};
}(100))

function Foo() {
    getName = function () { alert (1); };
    //定义一个全局变量
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
//定义一个全局变量getName
function getName() { alert (5);}

Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3

function convertStr1(str){
    var prePos = 0, nextPos = 0;
    var strResult = '';

    while((nextPos = str.indexOf('-', nextPos+1)) != -1){
        if(prePos != 0){
            strResult += str.slice(prePos+1, prePos+2).toUpperCase();
            strResult += str.slice(prePos+2, nextPos).toLowerCase();
        }else{
            strResult += str.slice(prePos, nextPos).toLowerCase();
        }
        prePos = nextPos;
    }

    return strResult;
}

function convertStr2(str){
    var arr = str.split('-');
    var strResult;
    for(var i=1; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    strResult = arr.join("");
    return strResult;
}