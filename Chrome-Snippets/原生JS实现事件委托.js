/*简单的事件委托，思路如下
 *1.事件处理是绑定在父元素上的
 *2.事件对象event的target属性（在IE中为srcElement属性）
 *  是指向实际目标元素的
 *3.当实际目标元素等于给定元素时，才调用真实的事件处理函数 
**/
function delegateEvent(selector, eventType, eventListener){
    var delegator = this;
    if (delegator.addEventListener){
        delegator.addEventListener(eventType, eventFunc, false);
    }else{
        delegator.attachEvent("on"+eventType, eventFunc)
    }

    // 封装实际的事件处理函数
    function eventFunc(event){
        var event = event || window.event;
        var target = event.target || event.srcElement;

        if(matchSelector(target, selector)){
            if(eventListener){
                eventListener.call(target, event);
            }
        }
    }

    // 判断实际目标元素是不是事先给定的元素
    function matchSelector(targetElement, selector){
        if (selector.charAt(0) === "#"){
            return targetElement.id = selector.slice(1);
        }

        if (selector.charAt(0) === "."){
            return (" " + targetElement.className + " ").indexOf(" " + targetElement.slice(1) + " ") != -1;
        }

       return targetElement.tagName.toLowerCase() === selector.toLowerCase();
    }

}

// 调用
var outerDiv = document.getElementById("outerDiv");
outerDiv.delegateEvent("#innerDiv", "click", function(event){
    console.log(event.target.id);
})