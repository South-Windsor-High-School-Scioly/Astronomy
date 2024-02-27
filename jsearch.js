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
