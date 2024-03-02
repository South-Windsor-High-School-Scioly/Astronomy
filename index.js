/*
Some quick tricks:
# - clears the search box (the program automatically removes # from beginning of queries if present)
@ - redirects you to the other page
$ - toggle between showing thumbnails or not
Enter - searches for the given query
*/

var thumbnail = true;
var number2 = '@';
var number3 = '#';
var number4 = '$';


function draw(list){
  document.getElementsByClassName("jawn")[0].innerHTML = "";

    if(list.length==0){
      document.getElementsByClassName("jawn")[0].innerHTML = "<img src='Images/not-available.jpg' style='width:50%; margin-right:auto; margin-left:auto; margin-top:25px; border-radius:55px'>"; 
    }

    else {
      if(thumbnail==true){
        document.getElementsByClassName("jawn")[0].innerHTML='<script src="index.js"></script><div class="jha" style="width:20%"></div><div class="bala" style="width:20%;"></div><div class="uppara" style="width:20%;"></div><div class="sujan" style="width:20%;"></div><div class="mawla" style="width:20%;"></div>    ';
      for(let i=0;i<list.length;i++){
        const path = "PDF Sources/"+list[i].substring(0,list[i].length-4)+".pdf";
      // console.log(path);
      // document.getElementsByClassName("jha")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; min-height:220px" src="' + path+'">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';

        if(i%5==4)
          document.getElementsByClassName("jha")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; min-height:220px" src="' + path+'">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';
        else if (i%5==3)
          document.getElementsByClassName("bala")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; min-height:220px" src="' + path+'">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';
        else if (i%5==2)
          document.getElementsByClassName("uppara")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; min-height:220px" src="' + path+'">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';
        else if (i%5==1)
          document.getElementsByClassName("sujan")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; min-height:220px" src="' + path+'">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';
        else
          document.getElementsByClassName("mawla")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; min-height:220px" src="' + path+'">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';
        }
    }
      else{
        document.getElementsByClassName("jawn")[0].innerHTML='<script src="index.js"></script><div class="jha" style="width:50%"></div>  <div class="bala" style="width:50%"></div>  ';
        for(let i=0;i<list.length;i++){
          const path = "PDF Sources/"+list[i].substring(0,list[i].length-4)+".pdf";    
          if(i%2==1)
            document.getElementsByClassName("jha")[0].innerHTML+= '<a style="margin-bottom:15px; color:red; font-size:1.7rem; text-decoration:none" href="javascript:switchPage(\'' + path+'\')">' +'<div>'+path.substring(12,path.length)+'</div> </a>';
          else if (i%2==0)
            document.getElementsByClassName("bala")[0].innerHTML+= '<a style="margin-bottom:15px; color:red; font-size:1.7rem; text-decoration:none" href="javascript:switchPage(\'' + path+'\')">' +'<div>'+path.substring(12,path.length)+'</div> </a>';
        }
}
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

const list=[
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

function regenPage(term, aList){
    var newList=[];
    var ind=0;
    for(let i=0;i<aList.length;i++){
      if(aList[i].toLowerCase().indexOf(term.toLowerCase())>=0){
        newList[ind]=aList[i];
        ind++
      }
    }
    //console.log(newList);
    dropbox(newList);
  }


function search(ele) {
    
    if(event.key==number3){
      document.getElementById("w").value="";
      document.getElementById("w").value="";
    }
    if(event.key==number4){
     // document.getElementById("w").value="";
      if(thumbnail){
        document.getElementById("dawg").innerHTML=" Thumbnails visible";
        thumbnail = false;
      }
      else {
        document.getElementById("dawg").innerHTML="Thumbnails hidden";
        thumbnail = true;
      }
      document.getElementById("w").value="";

    }
    else if (event.key==number2){
      if(document.title=="Power Search"){
        window.location.replace("pages.html");
      }
      else if (document.title=="Sources Drive" || document.title=="Input Sources"){
        window.location.replace("index.html");
      }
    }
    
        else {
        //console.log(fileTexts);
        var query = ele.value;
        if(query.substr(0,1)==number3||query.substr(0,1)==number4){
          query = query.substr(1);
        }

        else if(document.title=="Sources Drive"){
          regenPage(query, list);
        }
        else if (document.title=="Power Search"){
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
  }

}

function dropbox(list){

  if(list.length==0){
    document.getElementById("w").value="";
    alert("Not Available");

  }

    else {
  document.getElementsByClassName("red")[0].innerHTML="";
  document.getElementsByClassName("blue")[0].innerHTML="";
  document.getElementsByClassName("green")[0].innerHTML="";
  document.getElementsByClassName("yellow")[0].innerHTML="";
  document.getElementsByClassName("purple")[0].innerHTML="";

  //  javascript:switchPage('PDF Sources/Astronomy-Division-C-2022.pdf')

  for(let i=0;i<list.length;i++){
    var path = 'PDF Sources/'+list[i].substring(0,list[i].length-4)+'.pdf';
    console.log(path);
   // console.log(path);
   //document.getElementsByClassName("jawn")[0].innerHTML+= "<a target='_blank' href=\'" + path+"\'> <embed style='padding-top:40px; width: 25%; min-height:100px' src=\'" + path+"\'>" + "" +"<div>"+path+"</div> </a>";
      if(i%5==4)
        document.getElementsByClassName("red")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; height:220px" src="' + path+'\">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';
      else if (i%5==3)
        document.getElementsByClassName("blue")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; height:220px" src="' + path+'\">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';
      else if (i%5==2)
        document.getElementsByClassName("green")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; height:220px" src="' + path+'\">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';
      else if (i%5==1)
        document.getElementsByClassName("yellow")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; height:220px" src="' + path+'\">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';
      else
        document.getElementsByClassName("purple")[0].innerHTML+= '<a href="javascript:switchPage(\'' + path+'\')"> <embed style="padding-top:40px; width: 250px; height:220px" src="' + path+'\">' +'<div>'+path.substring(12,path.length-4)+'</div> </a>';

  }

}}


var webpage;

function switchPage(path){
  var body = document.getElementsByTagName("body")[0].innerHTML;
  document.getElementsByTagName("body")[0].innerHTML="";
  document.getElementsByTagName("body")[0].innerHTML+="<a href='javascript:revert()' style='float:right'> <img src='Images/placeholder.jpg' style='border-radius:25px' width='210px' height='850px'> </a>";
  document.getElementsByTagName("body")[0].innerHTML+="<embed src='"+path+"' style='width:80%; height:850px'>";
  webpage=body;
}

function revert(){
  document.getElementsByTagName("body")[0].innerHTML=webpage;
}
