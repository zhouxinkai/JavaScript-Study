Array.prototype.merge = function(arra){
    var oneArra = this;
    var twoArra = arra;
    var oneIndex = 0;
    var twoIndex = 0;
    var result = [];

    while(!(oneIndex == oneArra.length && twoIndex == twoArra.length)){
        //注意undefined和任何数比较都为假
        if((oneArra[oneIndex] < twoArra[twoIndex]) || (twoIndex == twoArra.length)){
            result[result.length] = oneArra[oneIndex];
            if(oneIndex < oneArra.length){
                oneIndex++;
            }
        }
        else{
            result[result.length] = twoArra[twoIndex];
            if(twoIndex < twoArra.length){
                twoIndex++;
            }
        }
    }

    return result;
}