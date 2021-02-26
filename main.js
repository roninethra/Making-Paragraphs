var sentence_variable= [];

function submit(){
    for(var j= 1; j<=6; j++){
         var sentences= document.getElementById("sentence_"+j).value;
         sentence_variable.push(sentences);
    }console.log(sentences);
    var lengthofarray= sentence_variable.length;
    var displaysentences= "";
    for(var n= 0; n<lengthofarray; n++){
    displaysentences= displaysentences+" "+(sentence_variable[n]);
    }
 document.getElementById("display_name_without_commas").innerHTML= displaysentences; 
 console.log(displaysentences);
}


function submit2(){
     for(var j= 7; j<=12; j++){
          var sentences= document.getElementById("sentence_"+j).value;
          sentence_variable.push(sentences);
     }console.log(sentences);
     var lengthofarray= sentence_variable.length;
     var displaysentences= "";
     for(var n= 0; n<lengthofarray; n++){
     displaysentences= displaysentences+" "+(sentence_variable[n]);
     }
  document.getElementById("display_paragraph").innerHTML= displaysentences; 
  console.log(displaysentences);
 }