/*几个重要的宿主对象（由浏览器提供的对象）
 *document: 对应网页的内容，当浏览器成功加载了一个网页时， 浏览器便在背后悄悄的把这个网页转换成一个document对象
 *(DOMs树代表着成功加载到浏览器窗口的当前网页
 *注：1. 应尽量减少访问DOM的次数，因为不管什么时候，只要是访问DOM树中的一个元素，浏览器都会搜索整个DOM树，从中查找匹配的元素
 *   2. 浏览器实际显示的是那颗DOM树，而不是HTML文档，当我们动态的修改DOM树时， 修改效果将实时地展现在浏览器中，但HTML文档却不会变
 *   3. 要多从DOM的角度去思考一些问题）
 *window: 
 *1.对应浏览器窗口本身。
 *2.其是ECMAScript规定的Global对象，在网页中定义的任何变量、函数，都是window对象的属性，当然包括document对象。
 */

function showPic(whichpic)
{
	if(!document.getElementById("placeholder"))	return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG")	return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description"))
	{
		var text =whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if(description.firstChild.nodeType == 3)
		{
			//node.firstChild是node.childNodes[0]的简写
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function prepareGallery()
{
	if(!document.getElementsByTagName) return false;
	/*document.getElementsByTagName称为对象检测，为真时表示这个对象可用*/
	if(!document.getElementById) return false;
	if(!document.getElementById("imageGallery")) return false;

	var gallery = document.getElementById("imageGallery");
	/*id属性:imageGallery，在这里其为HTML和JavaScript唯一的联系桥梁 ，目的是为了把行为（JavaScript）和结构（HTML）最大程度的分离*/

	var links = gallery.getElementsByTagName("a");
	for(var i=0; i<links.length; i++)
	{
		links[i].onclick = function()
		{
			return showPic(this) ? false :true;
			/*当一个函数被当作event handler的时候，this会被设置为触发事件的页面元素（element）,在这里this指向links[i]*/
		}
	}
	
}

function addLoadEvent(func)
{
	var oldonload = window.onload;
	/*HTML网页在全部加载完毕时将触发一个事件：window.onload事件*/
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

function insertAfter(newElement, targetElement)
{
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement)
	{
		parent.appendChild(newElement);
	}
	else
	{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function addClass(element, value)
{
    if(!element.className)
    {
        element.className = value;
    }
    else
    {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

addLoadEvent(prepareGallery);
// 这条语句将在JS文件被加载时立刻执行