/**
 * Created by bruce_zhou on 11/27/2015.
 */
$(function(){
    var $category = $("ul li:gt(5):not(:last)");
    $category.hide();
    var $toggleBtn = $("div.showmore > a");
    $toggleBtn.click(function(){
        if($category.is(":visible")){
            $category.hide();
            $(this).find('span')
                .css("color","#323232")
                .text("显示全部品牌");
            $("ul li").filter(":contains(佳能5),:contains(佳能6),:contains(佳能7)")
                .removeClass("promoted");
        }else{
            $category.show();
            $(this).find('span')
                .css("color","red")
                .text("精简显示品牌");
            $("ul li").filter(":contains(佳能5),:contains(佳能6),:contains(佳能7)")
                .addClass("promoted");
        }
        return false;
    });
    /*$toggleBtn.toggle(function(){
       $category.show();
        $(this).find("span")
            .css("color","red")
            .text("精简显示品牌");
        $("ul li").filter(":contains(佳能5),:contains(佳能6),:contains(佳能7)")
            .addClass("promoted");
        return false;
    },function(){
        $category.hide();
        $(this).find("span")
            .css("color","#323232")
            .text("显示全部品牌");
        $("ul li").filter(":contains(佳能5),:contains(佳能6),:contains(佳能7)")
            .removeClass("promoted");
        return false;
    }
    );*/
});

$(function(){
    $(".btn1").click(function(){
        $(".p1").toggle();
    })
});
/*$(function(){
    $(".btn2").toggle(
        function()
        {
            $("body").css("background-color","green");
        },
        function()
        {
            $("body").css("background-color","red");
        },
        function()
        {
            $("body").css("background-color","yellow");
        });
});*/
