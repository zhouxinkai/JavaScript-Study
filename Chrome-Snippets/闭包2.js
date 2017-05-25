function fun(n, o){
    console.log(o);
    return {
        fun:function(m){
            return fun(m, n);
        }
    };
}

var a = fun(0);
var o = {
    bruceZhou:'bruceZhou',
    fn:function(){
        with(o){
        console.log(fn)
        console.log(bruceZhou);
        }
    }
}