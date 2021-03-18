var protocol = (
      ("https:" == document.location.protocol) 
      ? "https" 
      : "http"
  );
  document.write(
      unescape(
          "%3Cscript"
              + " src='"
                  + protocol 
                  + "://"
                  + "www.blogger.com"
                  + "/feeds/1606337331133671005/posts/default?alt=json-in-script&max-results=150&callback=showurl"
              + "'"
              + " type='text/javascript'
          + "%3E"
          + "%3C/script%3E"
      ) // this HAS to be escaped, otherwise it would 
        // close the actual (not injected) <script> element
  );



