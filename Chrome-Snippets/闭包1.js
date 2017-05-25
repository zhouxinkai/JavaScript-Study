function counter(){
    var x = 0;

    return{
        increase: function increase(){return ++x;},
        decrease: function decrease(){return --x;}
    }
}

var ctor = counter();
console.log(ctor.increase());
console.log(ctor.decrease());

function outer(){
    var context = "outer";
    return function inner(){
        console.log(context);
    }
}