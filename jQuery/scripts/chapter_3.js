/**
 * Created by bruce_zhou on 12/3/2015.
 */
$(function(){
    var x = 10;
    var y = 20;
    $("a.tooltip").mouseover(function(event){
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
        $("body").append(tooltip);
        $("#tooltip")
            .css({"top": event.pageY + x + "px",
                  "left": event.pageX + y + "px",
                  "position":"absolute"})
            .show("fst");
    }).mouseout(function(){
        $("#tooltip").remove();
        this.title = this.myTitle;
    });
});
$(document).ready(function(){
    var $panel = $("#panel");
    $panel.css("opacity","0.5");
    $panel.click(function(){
       $(this).animate({"left":"500px","height":"200px", "opacity":"1" }, 3000)
              .animate({"top":"200px","width":"200px"}, 3000, function(){
            $(this).css("border","5px solid blue");
        })
    });
    $panel.hover(function(){
        $(this).stop(true)
            .animate({"height":"300px"}, 3000)
            .animate({"width":"300px"}, 3000);
    },function(){
        $(this).stop(true)
            .animate({"height":"20px"}, 3000)
            .animate({"width":"60px"}, 3000);
    })
});