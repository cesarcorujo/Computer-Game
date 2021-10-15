
function playerSelection() {

   let player = document.querySelector("#selection").value.toLowerCase();
}

let userScore = 0;
let computerScore = 0;


// Function for cumputer random play //


function computerPlay() {

const play = ["Paper","Sissors","Rock"];

   let randomItem = play[Math.floor(Math.random()*play.length)];

  document.getElementById("demo").innerHTML = "Computer selection is: " + "  " + randomItem.toUpperCase();

return randomItem;
}

//Disable computer text //

function disable() {
  
  document.getElementById("demo").innerHTML = "";
  }

    
// Function to print game //


      


function game(eventgame) {

  
   eventgame.preventDefault();
   computerPlay();

   

   let player = document.querySelector("#selection").value.toLowerCase();

    var computer = computerPlay();

    let message = document.querySelector("#message");
   let mensaje = "Your selection is :  " + " " + player.toUpperCase() ;


   
          
   if ((computer === "Paper" && player === "paper") || 
   (computer === "Sissors" && player === "sissors") || 
   (computer === "Rock" && player === "rock"))  
   
    {
      
      document.getElementById("alert1").innerHTML = "Tie !";
      document.getElementById("gamerTotal").innerHTML = " Gamer =  0" ;
      document.getElementById("computerTotal").innerHTML = " Computer  =  0" ;
      message.textContent = mensaje;


} else if (computer === "Rock" && player === "paper") 

{
   
   message.textContent = mensaje;
   document.getElementById("alert2").innerHTML = "Paper beats rock !";
   document.getElementById("gamerTotal").innerHTML = " Gamer =  1" ;
   document.getElementById("computerTotal").innerHTML = " Computer  =  0" ;
   userScore++;

} else if (computer === "Paper" && player === "rock") {

   
   message.textContent = mensaje;
   document.getElementById("alert2").innerHTML = "Paper beats rock !";
   document.getElementById("gamerTotal").innerHTML = " Computer =  1" ;
   document.getElementById("computerTotal").innerHTML = " Gamer  =  0" ;
   computerScore++;
}

 else if (computer === "Sissors" && player === "rock")
 

{

  
   message.textContent = mensaje;
   document.getElementById("alert3").innerHTML = "Rock beat Sissors !";
   document.getElementById("gamerTotal").innerHTML = " Gamer =  1" ;
   document.getElementById("computerTotal").innerHTML = " Computer  =  0" ;
   userScore++;

}  else if (computer === "Rock" && player === "sissors") {

 
   message.textContent = mensaje;
   document.getElementById("alert3").innerHTML = "Rock beat Sissors !";
   document.getElementById("gamerTotal").innerHTML = " Gamer =  0" ;
   document.getElementById("computerTotal").innerHTML = " Computer  =  1" ;
   computerScore++;
}

 else if (computer === "Paper" && player === "sissors") 

{
   
 
   message.textContent = mensaje;
   document.getElementById("alert4").innerHTML = "Sissors beats Paper !";
   document.getElementById("gamerTotal").innerHTML = " Gamer =  1" ;
   document.getElementById("computerTotal").innerHTML = " Computer  =  0" ;
   userScore++;
 
} else if (computer === "Sissors" && player === "paper") {

   
   message.textContent = mensaje;
   document.getElementById("alert4").innerHTML = "Sissors beats Paper !";
   document.getElementById("gamerTotal").innerHTML = " Gamer =  0" ;
   document.getElementById("computerTotal").innerHTML = " Computer  =  1" ;
   computerScore++;

} else {

   disable();
   alert("PLease type only correct options");
 
}
      
}    
  

   


 //Event to reload//
     
document.getElementById("form").reset()

let miform = document.querySelector("#form");
miform.addEventListener("submit",game);

const reloadtButton = document.querySelector("#reload");
 //Reload everything://

function reload() {

    reload = location.reload();
}

 //Event listeners for reload //
reloadButton.addEventListener("click", reload, false);



