
var grupoTarjetas = ["✂️", "📃", "🪨"];



function barajaTarjetas() {
  var resultado;
  resultado = grupoTarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}



function reparteTarjetas() {


  var mesa = document.querySelector("#mesa");
  var mesa1 = document.querySelector("#mesa1");
  var mesa2 = document.querySelector("#mesa2");
  var mesa3 = document.querySelector("#mesa3");


  var tarjetasBarajadas = barajaTarjetas();

  mesa2.innerHTML = '<span>Human Play</span>';
  mesa3.innerHTML = '<span>Computer Play</span>';

  mesa.innerHTML = "";
  mesa1.innerHTML = "";



  tarjetasBarajadas.forEach(function (elemento) {


    var tarjeta = document.createElement("div");
    var tarjeta1 = document.createElement("div");


    tarjeta.innerHTML =
      "<div  class='tarjeta1'>" +
      "<div class='tarjeta__contenido1'>" +
      elemento +
      "</div>";


    mesa1.appendChild(tarjeta1);

    tarjeta1.innerHTML =
      "<div class='tarjeta'>" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);


  });


}

reparteTarjetas();

function computerPlay() {


  let randomItem = tarjeta[Math.floor(Math.random() * play.length)];


  return randomItem;
}

function selection() {

  this.classList.add("clicking");

}


function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('clicking');
}


document.querySelectorAll(".tarjeta1").forEach(function (elemento) {
  elemento.addEventListener("click", selection);
  elemento.addEventListener('transitionend', removeTransition);

});

