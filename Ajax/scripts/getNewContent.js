/**
 * Created by bruce_zhou on 11/23/2015.
 */
function getNewContent()
{
    var request = getHTTPObject();
    if(request)
    {
        request.open("GET","example.txt",true);
        request.onreadystatechange = function()
        /*指定处理响应的回调函数*/
        {
            if(request.readyState == 4)
            {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                console.log(request.responseXML);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
        /*发送请求*/
    }
    else
    {
        alert("Sorry, your browser doesn't support XMLHttpRequest");
    }
}
addLoadEvent(getNewContent);