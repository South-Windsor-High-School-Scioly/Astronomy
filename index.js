/*
Some quick tricks:
1 - go to input sources page
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
      else if (document.title=="Sources Drive" || document.title=="Input Sources"){
        window.location.replace("index.html");
      }
    }
    else if (event.key=='1'){
        if(document.title=="Input Sources") {
            window.location.replace("index.html");
        }
        else {
            window.location.replace("input.html");
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

/*
Challenges: Get it to parse Json 
Get it to make File objects from given paths. 
*/

var fileNames=[];

function readFile(file){
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
    const data = reader.readAsText(file);
    console.log(reader.result);
    return data;
}

function inputsToFileArr(){
    FilesObjectArray=[];
    fileNames=[];
    for(let i=0;i<document.getElementById("x").files.length;i++){
    fileNames[i] = document.getElementById("x").files[i].name;
    //console.log(fileNames[i]);
}
readFile(FilesObjectArray[0]);
}




