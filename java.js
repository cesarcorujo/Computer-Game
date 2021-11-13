
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
        "<div  class='card'>" +
       "<div class='card__content'>" +
        randomCard +
        "</div>";
  
  
      table1.appendChild(card);
  
     
      //card.classList.add("clicking");


  
    };
  
  
  
  
 
  

   

    




document.querySelectorAll(".card1").forEach(function (element) {
  element.addEventListener("click", selection);
  element.addEventListener('transitionend', removeTransition);
element.addEventListener("click", addCard);


});

