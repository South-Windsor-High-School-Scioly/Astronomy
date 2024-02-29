/*
Some quick tricks:
1 - go to input sources page
2 - clears the search box (the program automatically removes # from beginning of queries if present)
3 - redirects you to the other page
Enter - searches for the given query
*/

var query = "";
var acceptedList=[];


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

var fileTexts = [];
var fileNames=[];

function readFile(file,i){
    var reader = new FileReader();
    reader.addEventListener(
        "load",
        () => {
          // this will then display a text file
          console.log("Read: Success");
       // console.log(reader.result);
            fileTexts[i]=reader.result;
        
        },
        false,
      );
        
    if(file){
    reader.readAsText(file);
    }
    }


function inputsToFileArr(){
    fileTexts=[];
    fileNames=[];
    for(let i=0;i<document.getElementById("x").files.length;i++){
    fileNames[i] = document.getElementById("x").files[i].name;
    readFile(document.getElementById("x").files[i],i);
    //console.log(fileNames[i]);
    console.log("Array: Success");
}
}

function search(ele) {
    if(event.key == 'Enter') {
        //console.log(fileTexts);
        query = ele.value;
        if(query.substr(0,1)=="3"){
          query = query.substr(1);
        }
            var ind=0;
            acceptedList=[];
            
            for(let i=0;i<fileTexts.length;i++){
                if(findMatch(query,fileTexts[i])==true){
                    acceptedList[ind]=fileNames[i];
                    ind++;
                }
            }
            console.log(acceptedList);
            if(acceptedList.length==0)
                console.log("No Matches Found");
            else 
                console.log("Matches found");

       // alert(query);
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
}


