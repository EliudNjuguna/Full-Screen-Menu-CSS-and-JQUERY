 function anim(targetedDiv){
        
        var targetedLetter = $("#"+targetedDiv+" .rotate").text();
        
        var asciiValue = targetedLetter.charCodeAt(0);
        
        var pointer = 65;
     
        changeChar();
     
     function changeChar(){
         
         if(pointer <= asciiValue){
             $("#"+targetedDiv+" .rotate").text(String.fromCharCode(pointer));
             
             
             //fromCharCode function convert pointer value in character such as 65= A
             
             pointer++;
             
             //calling the fuction every 20ms
             setTimeout(changeChar,20); 
         }else{
             $(this).stop;
         }
     }
        
    }
