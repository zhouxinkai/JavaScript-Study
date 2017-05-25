function redefineBind(){
    Function.prototype.bind = null;
    if(typeof Function.prototype.bind !== "function"){
        Function.prototype.bind = bind;
        function bind(scope){
        //函数声明将会创建一个局部变量
            if(typeof this !== "function"){
                throw new TypeError("Not is a function");
            }

            var fToBind = this;
            //将this值暂存下来
            var fBound = function () {
                  return fToBind.apply(scope || this, Array.prototype.slice.call(arguments));
                };

            function fTemp(){};
            fTemp.prototype = this.prototype;
            var temp = new fTemp();
            temp.constructor = fBound;
            fBound.prototype = temp;

            return fBound;
        }
    }
}