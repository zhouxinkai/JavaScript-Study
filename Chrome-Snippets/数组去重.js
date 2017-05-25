/*第一种方法
*for循环中每次从原数组中取出一个元素，用这个元素循环与结果数组对比
*若结果数组中没有该元素，则存到结果数组中
*/
Array.prototype.unique1 = function(){
    var result = [];
    for(var i=0; i<this.length; i++){
        var bRepeat = false;
        for(var j=0; j<result.length; j++){
            if(this[i] == result[j]){
                bRepeat = true;
                break;
            }
        }

        if(!bRepeat){
            result.push(this[i]);
        }
    }

    return result;
}

/*第二种方法
*先排序，再检查原数组中的第i个元素与结果数组中的最后一个元素是否相同
*如果不相同，则将该元素存入结果数组中
*/
Array.prototype.unique2 = function(){
    function compare(value1, value2){
        return value1 - value2;
    }
    this.sort(compare); 
    // 先排序
    var result = [];

    for(var i=0; i<this.length; i++){
        if(this[i] != result[result.length - 1]){
            result.push(this[i]);
        }
    }

    return result;
}

/*第三种方法
*推荐使用,利用了一个辅助对象json
*/
Array.prototype.unique3 = function(){
    var result = [];
    var json = {};

    for(var i=0; i<this.length; i++){
        if(!json[this[i]]){
            result.push(this[i]);
            json[this[i]] = 1;
        }
    }

    return result;
}
