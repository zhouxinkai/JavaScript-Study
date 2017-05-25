var iArray = [];
function getRandom(iStart, iEnd){
    var iChoices = iEnd - iStart+1;
    return Math.floor(Math.random() * iChoices + iStart);
    // 值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
}

for(var i=0; i<10; i++){
    iArray.push(getRandom(10, 100));
}
iArray.sort(function(pre, next){
    return pre - next;
});
console.log(iArray);