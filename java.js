
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

  table2.innerHTML = '<span>Human Play</span>';
  table3.innerHTML = '<span>Computer Play</span>';

  table.innerHTML = "";
  table1.innerHTML = "";



 sortedCards.forEach(function (elemento) {


    var card = document.createElement("div");
    var card1 = document.createElement("div");


    card.innerHTML =
      "<div  class='card'>" +
      "<div class='card__content'>" +
      elemento +
      "</div>";


    table1.appendChild(card);

    card1.innerHTML =
      "<div class='card1'>" +
      "<div class='card1__content'>" +
      elemento +
      "</div>" +
      "</div>";

    table.appendChild(card1);


  });


}

distributeCards();

function computerPlay() {


  
  let randomItem = cardGroup[Math.floor(Math.random() * cardGroup.length)];

 
  return randomItem;

  //tarjeta.classList.add("clicking");

 // console.log(this);
}




function selection() {

  this.classList.add("clicking");

}


function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('clicking');
}


document.querySelectorAll(".card1").forEach(function (element) {
  element.addEventListener("click", selection);
  element.addEventListener('transitionend', removeTransition);
element.addEventListener("click", computerPlay);


});

