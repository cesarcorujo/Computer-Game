



var cardGroup = ["✂️", "📃", "🪨"];



function sortCards() {
  var result;
  result = cardGroup.sort(function () {
    return 0.5 - Math.random();
  });
  return result;
}



function distributeCards() {


  var table = document.querySelector("#table");
  var table1 = document.querySelector("#table1");
  var table2 = document.querySelector("#table2");
  var table3 = document.querySelector("#table3");


  var sortedCards = sortCards();

  table2.innerHTML = '<span>Your Selection</span>';
  table3.innerHTML = '<span>Computer Selection</span>';

  table.innerHTML = "";
  //table1.innerHTML = "";



 sortedCards.forEach(function (element) {


    
    var card1 = document.createElement("div");

    

    card1.innerHTML =
      "<div class='card1'>" +
      "<div class='card1__content'>" +
      element +
      "</div>" +
      "</div>";

    table.appendChild(card1);


  });


}

distributeCards();

function computerPlay() {


  
  let randomItem = cardGroup[Math.floor(Math.random() * cardGroup.length)];

 
  return randomItem;

 

  
}




function selection() {

  var clicking = document.querySelectorAll(".clicking");
  
  if (clicking.length > 1) {

    return;
  }

  this.classList.add("clicking");

  
}


function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('clicking');
}






function addCard() {

     
    var table1 = document.querySelector("#table1");

  
       
    table1.innerHTML = "";
  
  
  
    
      var randomCard = computerPlay();
     
      var card = document.createElement("div");
      
     
  
  
      card.innerHTML =
        "<div  class='card' >" +
       "<div class='card__content'>" +
        randomCard +
        "</div>";
  
  
      table1.appendChild(card);
  
     
     table1.classList.add("clicking");

     function removeTransition1() {
      
      table1.classList.remove('clicking');
     
      }

      document.getElementById("table1").addEventListener("transitionend", removeTransition1); 
         
  
 
    };
  
        
  
    
 

    function game() {

      
      
        let pScore = 0;
        let cScore = 0;

      
       
       const updateScore = () => {
          const playerScore = document.querySelector(".gamerTotal p");
        const computerScore = document.querySelector(".computerTotal p");
         playerScore.textContent = pScore;
         computerScore.textContent = cScore;
       };
      
      
    
     let selected ;

    let computer = document.querySelector("#table1").textContent;

       
    selected = document.querySelectorAll(".clicking");


            
     if ((computer === "✂️" && selected[0].textContent === "✂️") || 
     (computer === "📃" && selected[0].textContent === "📃") || 
     (computer ===  "🪨" && selected[0].textContent === "🪨"))  
     
      {
        
        document.getElementById("alert").innerHTML = "Tie !";
        
       
    updateScore();
   
   } else if (computer === "🪨" && selected[0].textContent === "📃") 
   
   {
     
    
     document.getElementById("alert").innerHTML = "Paper beats rock !";
     pScore++;
  
    updateScore();
    return;
   
   } else if (computer === "📃" && selected[0].textContent === "🪨") {
   
     
     
     document.getElementById("alert").innerHTML = "Paper beats rock !";
    cScore++;
   
    updateScore();
   return;
   }
   
   else if (computer === "✂️" && selected[0].textContent === "🪨" )
   
   
   {
   
    
   
     document.getElementById("alert").innerHTML = "Rock beat Scissors !";
     pScore++;
     
    updateScore();
    return;
   
   }  else if (computer === "🪨" && selected[0].textContent === "✂️") {
   
   
  
     document.getElementById("alert").innerHTML = "Rock beat Scissors !";
  
    cScore++;
    
    updateScore();
    return;

   }
   
   else if (computer === "📃" && selected[0].textContent === "✂️") 
   
   {
     
     
     document.getElementById("alert").innerHTML = "Scissors beats Paper !";
     pScore++;
    updateScore();
   
    return;
   
   } else if (computer === "✂️" && selected[0].textContent === "📃") {
   
     
     document.getElementById("alert").innerHTML = "Scissors beats Paper !";
    cScore++;
    
     updateScore();
  
    return;
    
   
   }
   
       
   }    
   
  
  

document.querySelectorAll(".card1").forEach(function (element) {
  element.addEventListener("click", selection);
  element.addEventListener('transitionend', removeTransition);
  element.addEventListener("click", addCard);
  element.addEventListener("click", game);
 
});


