function getQueryObject(url){
    url = url==null ? window.location.href: url;
    var search = url.slice(url.indexOf('?')+1);
    var obj = {};
    var reg = /([^&?=]+)=([^&?=]*)/g;

    search.replace(reg, function(match, $1, $2, pos, originalText){
        var name = decodeURIComponent($1);
        var value = decodeURIComponent($2);

        value = String(value);
        obj[name] = value;
        return match;
    });

    return obj;
}

function testRegExp(){
    var strTest = "<tr><td>{id}</td><td>{id}</td><td>{id}_{name}</td></tr>";
    strTest.replace(/\{\S{1,4}\}/g, function(match,pos,origin){
        console.log(match);
        switch(match){
            case "{id}":
                return "10";
            case "{name}":
                return "Tony";
        }
    });
    strTest.replace(/\{id\}/g, '10').replace(/\{name\}/g, 'Tony');

    strTest = "first_name=bruce&second_name=zhou";
    strTest.replace(/([^&?=]+)=([^&?=]*)/g, "$$1:$1-$$2:$2");
}
