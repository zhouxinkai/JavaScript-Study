/**
 * Created by bruce_zhou on 11/23/2015.
 */
function addLoadEvent(func)
{
    var oldonload = window.onload;
    if(typeof oldonload != "function")
    {
        window.onload = func;
    }
    else
    {
        window.onload = function()
        {
            oldonload();
            func();
        }
    }
}