/*
Some quick tricks:
# - clears the search box (the program automatically removes # from beginning of queries if present)
@ - redirects you to the other page
Enter - searches for the given query
*/

var query = "";

function search(ele) {
    if(event.key === 'Enter') {
        query = ele.value;
        if(query.substr(0,1)=="#"){
          query = query.substr(1);
        }
        //alert(query);
    }
    else if(event.key=='#'){
      document.getElementById("w").value="";
    }
    else if (event.key=='@'){
      if(document.title=="Power Search"){
        window.location.replace("pages.html");
      }
      else if (document.title=="Sources Drive"){
        window.location.replace("index.html");
      }
    }
}

