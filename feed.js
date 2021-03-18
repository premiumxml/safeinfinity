$.ajax({  
 url : '/feeds/1606337331133671005/posts/default?alt=json-in-script&max-results=150&callback=showurl',  
 type: 'get',  
 dataType: 'jsonp',  
 success: function(data) {  
 var link = '',  
 content = data.feed.entry,  
 links =new Array();   
 if (content !== undefined) {  
 for (var i = 0; i < content.length; i++) {  
 for (var j = 0; j < content[i].link.length; j++) {  
 if (content[i].link[j].rel == "alternate") {  
 link = content[i].link[j].href;  
 break;  
 }  
 }  
       
       
       

  );



