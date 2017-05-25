context = "global";
var obj = {  
    context: "object",
    method: function () {
        console.log(this + ":" +context); 
    }
}
obj.method();
//[object Object]:global