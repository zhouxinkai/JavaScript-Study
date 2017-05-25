/**
 * Created by bruce_zhou on 11/23/2015.
 */
function getHTTPObject()
{
    console.log(typeof XMLHttpRequest);
    if(typeof XMLHttpRequest == "undefined")
    {
        XMLHttpRequest = function()
        {
            try
            {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }
            catch(e){}
            try
            {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }
            catch(e){}
            try
            {
                return new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch(e){}

            return false;
        };
    }
    return new XMLHttpRequest();
}