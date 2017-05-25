//有待完善
function attachEvent(eventType, listener){
    var objDelegate;
    var that = this;

    function bind(eventType, listener){
        if(objDelegate[eventType] instanceof Array){
            objDelegate[eventType].push(listener);
        }else{
            objDelegate[eventType] = [];
            objDelegate[eventType].push(listener);
        }
        that.objDelegate = objDelegate;
    }

    function trigger(){
        var args = [];
        for(var i=0; i<arguments.length; i++){
            args.push[arguments[i]];
        }
        var listeners = that.objDelegate[eventType];
        for (var index in listeners){
            listeners[index].apply(that, args);
            //listeners.shift();
        }
    }
}