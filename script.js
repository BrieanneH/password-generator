
//create string elements
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers="0123456789";
var chars="!@#$%^&*()?~";

//create user input value
var selected= "";




function generate(){ 
    var numChar = prompt("How many charaters would you like to use?(8-128)");

        //create loop when condition is false
        if (numChar < 8){
            alert("Not enough charaters. Try again.");
            return;
            
        }
        else if (numChar > 128){
            alert("Too many charaters. Try again.");
            return;
            
            
        }
    

    
    var confirmUpper = confirm("Do you want upper case letters?");
     if(confirmUpper){ 
         //picking a random charater from selected string
         selected = selected + upperCase;
        


    
     



    }



    var confirmLower = confirm("Do you want lower case letters?");
    if(confirmLower){
        selected = selected + lowerCase;

        
    }   



    var confirmNumbers = confirm("Do you want numbers?");
     if (confirmNumbers){
        selected = selected + numbers;
       
    }
        

    var confirmSpecial = confirm("Do you want special charaters?");
    if (confirmSpecial){
        selected = selected + chars;
    }


    //add for loop from 0 to numChar
    var password = "";


    for (var i =0; i < numChar; i ++){
        var index= Math.floor(Math.random()*selected.length); 
        console.log (selected[index] )
        password= selected[index]+password;
    } 

    alert("Your Password is: "+ password)
    document.getElementById("display").value = password;

}    
  

    
        

   
   
   

    



