/*
Some quick tricks:
2 - clears the search box (the program automatically removes # from beginning of queries if present)
3 - redirects you to the other page
Enter - searches for the given query
*/

var query = "";

function search(ele) {
    if(event.key === 'Enter') {
        query = ele.value;
        if(query.substr(0,1)=="3"){
          query = query.substr(1);
        }
        //alert(query);
    }
    else if(event.key=='3'){
      document.getElementById("w").value="";
    }
    else if (event.key=='2'){
      if(document.title=="Power Search"){
        window.location.replace("pages.html");
      }
      else if (document.title=="Sources Drive"){
        window.location.replace("index.html");
      }
    }
}

// We chose to use the FileReader API for this - file parsing algorithm below
function strToArr(str){
    return str.trim().split(" ");
}

function findMatch(phrase,data){
    for(let i=0;i<strToArr(phrase).length;i++){
        if(data.indexOf(strToArr(phrase)[i])>=0)
        {
            return true;
            break;
        }
    }
    return false;
}

var paths = JSON.parse();
console.log(paths);

/*
Challenges: Get it to parse Json 
Get it to make File objects from given paths. 
*/