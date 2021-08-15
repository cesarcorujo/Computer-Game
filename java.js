

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

   

     
   if ((computerPlay() === "Paper" && player === "paper" ) || 
   (computerPlay() === "Sissors" && player === "sissors") || 
   (computerPlay() === "Rock" && player === "rock" )) {

      alert("Empate");
   }

   else if ((computerPlay() === "Paper" && player === "rock" )) {

      alert("Paper beats rock !");
   }
else if ((computerPlay() === "Sissors" && player === "rock" )){

   alert("Rock beat Sissors !");
}

else if((computerPlay() === "Rock" && player === "paper" )) {

   alert("Paper beats Rock !");
}

   else {
      alert("Play again");
   }
}

let miform = document.querySelector("#form");
miform.addEventListener("submit",game);
