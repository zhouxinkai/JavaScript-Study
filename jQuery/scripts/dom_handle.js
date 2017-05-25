/**
 * Created by bruce_zhou on 12/1/2015.
 */
$(function(){
    $("#address").focus(function(){
        var txt_value = $(this).val();
        if(txt_value == 'address')
        {
            $(this).val('');
        }
    });
});