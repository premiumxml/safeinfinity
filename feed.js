function loadJS(url) { //url is the string of the URL of the resource to fetch
    var oReq = new XMLHttpRequest(); //create a new XMLHttpRequest and call it oReq
    oReq.addEventListener("load", function(){eval(this.responseText)}); //evaluates the contents of the file once fetched
    oReq.open("GET", https://www.blogger.com/feeds/1606337331133671005/posts/default?alt=json-in-script&amp;max-results=150&amp;callback=showurl); //set the URL to fetch to the specified URL
    oReq.overrideMimeType("text/plain; charset=x-user-defined"); //force the content of the file to be plain text
    oReq.send(); //send the request
}


