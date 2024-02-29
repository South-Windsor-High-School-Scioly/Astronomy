/*
Some quick tricks:
1 - go to input sources page
2 - clears the search box (the program automatically removes # from beginning of queries if present)
3 - redirects you to the other page
Enter - searches for the given query
*/


function draw(list){
    document.getElementsByClassName("jawn")[0].innerHTML=""

    if(list.length==0){
        document.getElementsByClassName("jawn")[0].innerHTML="<img src='Images/flick.jpg'>"
    }
    for(let i=0;i<list.length;i++){
        const path = "PDF Sources/"+list[i].substring(0,list[i].length-4)+".pdf";
       // console.log(path);
       document.getElementsByClassName("jawn")[0].innerHTML+= "<a target='_blank' href=\'" + path+"\'> <embed style='padding-top:40px; width: 33%; min-height:100px' src=\'" + path+"\'>" + "" +"<div>"+path+"</div> </a>";
      }
}

var query = "";
var acceptedList=[];


// We chose to use the FileReader API for this - file parsing algorithm below
function strToArr(str){
    return str.trim().split(" ");
}

function findMatch(phrase,data){
        phrase=phrase.toLowerCase();
        if(data.indexOf(phrase)>=0)
            return true;
        else
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
//console.log("Read: Success");
       // console.log(reader.result);
            fileTexts[i]=reader.result.toLowerCase();
        
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
//console.log("Array: Success");
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
                   // console.log("Matches found");
                }
            }
            //console.log(acceptedList);
            draw(acceptedList);

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

function dropbox(){
  list=[
    "Astro Notes-Overview.txt",
    "Astronomy H-R Diagrams.txt",
    "Astronomy-Division-C-2022.txt",
    "Direct And Transit Imagin Methods.txt",
    "Formula_Sheet.txt",
    "GalaxyAndStarFormation (2020) Division C.txt",
    "Herbig Ae And Be And Vega-Type Stars.txt",
    "Hl and Hll Objects.txt",
    "Hl And Hll Regions In Orion Nebula.txt",
    "Orbital Motions Calculations.txt",
    "Planet Habitability.txt",
    "Radial Velocity Calc.txt",
    "Radiation Laws (Easier).txt",
    "T-Tauri Variables Source 2.txt", 
  "Supernovas And Binary Systems.txt"];
  for(let i=0;i<list.length;i++){
    const path = "PDF Sources/"+list[i].substring(0,list[i].length-4)+".pdf";
   // console.log(path);
   document.getElementsByClassName("jawn")[0].innerHTML+= "<a target='_blank' href=\'" + path+"\'> <embed style='padding-top:40px; width: 25%; min-height:100px' src=\'" + path+"\'>" + "" +"<div>"+path+"</div> </a>";
   
  }
}


function enlarge(cl){
  console.log("element clicked");
  if(document.getElementsByClassName(cl)[0].style.width="33%"){
    document.getElementsByClassName(cl)[0].style.width="80%";
    document.getElementsByClassName(cl)[0].style.minHeight = "800px";
  }
  else if(document.getElementsByClassName(cl)[0].style.width="80%"){
    document.getElementsByClassName(cl)[0].style.width="33%";
    document.getElementsByClassName(cl)[0].style.minHeight = "400px";
  }
}

/*Tasks with Nithik

1. Styling - easy - inline display on drive
2. Enlarge style function

*/