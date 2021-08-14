

// Function to Playerselection //

function playerSelection (){

   let player = document.querySelector("#selection").value;
   let message = document.querySelector("#message");
   let mensaje = "Your selection is " + player ;
  message.textContent = mensaje;

if (player !== "paper" || player !== "rock" || player !== "sissors"){

   alert("Error");
}

else {
   alert("Good try");
}
   
}



// Function for cumputer random play //


function computerPlay() {

const play = ["paper","sissors","rock"];

   let randomItem = play[Math.floor(Math.random()*play.length)];

  document.getElementById("demo").innerHTML = "Computer Selection is " + randomItem;


}
    
function game(eventogame) {
   eventogame.preventDefault();
   console.log(computerPlay(),playerSelection());
}

let miform = document.querySelector("#form");
miform.addEventListener("submit",game);
