// Search box on webpage
var query = "";

function search(ele) {
    if(event.key === 'Enter') {
        query = ele.value;   
        //alert(query);
    }
}