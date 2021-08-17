

// Function to Playerselection //

function playerSelection (){

   let player = document.querySelector("#selection").value;
   let message = document.querySelector("#message");
   let mensaje = "Your selection is " + player ;
  
   
if (player == "paper" || player == "Paper" || player == "PAPER"
|| player == "rock" || player == "Rock" || player == "ROCK"|| 
player == "Sissors" || player == "SISSORS" || player == "sissors"){

   message.textContent = mensaje;
}

else {
  alert("PLease type only correct options");
}

}


// Function for cumputer random play //


function computerPlay() {

const play = ["Paper","Sissors","Rock"];

   let randomItem = play[Math.floor(Math.random()*play.length)];

  document.getElementById("demo").innerHTML = "Computer Selection is " + randomItem;

return randomItem;
}

    
// Function to print game //

function game(eventgame) {

   eventgame.preventDefault();
   computerPlay();
   playerSelection();

   let player = document.querySelector("#selection").value;

   

     
   if ((computerPlay() === "Paper" && player === "paper") ||  
   (computerPlay() === "Paper" && player === "Paper") ||  
   (computerPlay() === "Paper" && player === "PAPER") || 

   (computerPlay() === "Sissors" && player === "sissors") || 
   (computerPlay() === "Sissors" && player === "Sissors") || 
   (computerPlay() === "Sissors" && player === "SISSORS") || 


   (computerPlay() === "Rock" && player === "rock") || 
   (computerPlay() === "Rock" && player === "Rock") || 
   (computerPlay() === "Rock" && player === "ROCK"))

   {

      document.getElementById("alert1").innerHTML = "Draw !";
   }


   else if ((computerPlay() === "Rock" && player === "paper") ||
   (computerPlay() === "Rock" && player === "Paper") ||
   (computerPlay() === "Rock" && player === "PAPER") ||

   (computerPlay() === "Paper" && player === "rock") ||
   (computerPlay() === "Paper" && player === "Rock") ||
   (computerPlay() === "Paper" && player === "ROCK"))
  
   {

      document.getElementById("alert2").innerHTML = "Paper beats rock !";
   }

else if ((computerPlay() === "Sissors" && player === "rock") ||
(computerPlay() === "Sissors" && player === "Rock") || 
(computerPlay() === "Sissors" && player === "ROCK") || 
(computerPlay() === "Rock" && player === "sissors") || 
(computerPlay() === "Rock" && player === "Sissors") || 
(computerPlay() === "Rock" && player === "SISSORS"))

{

   document.getElementById("alert3").innerHTML = "Rock beat Sissors !";
}

else if((computerPlay() === "Paper" && player === "sissors" ) || 
(computerPlay() === "Paper" && player === "Sissors" ) ||
(computerPlay() === "Paper" && player === "SISSORS" ) ||

(computerPlay() === "Sissors" && player === "paper" ) ||
(computerPlay() === "Sissors" && player === "Paper" ) ||
(computerPlay() === "Sissors" && player === "PAPER" ))

{

   document.getElementById("alert4").innerHTML = "Sissors beats Paper !";
}

 
}





let miform = document.querySelector("#form");
miform.addEventListener("submit",game);

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {

    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);