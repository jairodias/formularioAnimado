var buttonTeste = document.querySelector(".btn-menu");
var info = document.querySelector('.col-vendas');
// var vendas = document.querySelector('.info-vendas');
var toggle = 0;

buttonTeste.addEventListener("click", event => {
  event.preventDefault();
  if(toggle == 0){
    buttonTeste.setAttribute("style", "margin-left: 15%");
    document.querySelector('.menu').setAttribute("style","left: 0px !important");
    info.setAttribute("style", "margin-left: 10%");
    toggle = 1;
  }else{
    toggle = 0;
    buttonTeste.setAttribute("style", " margin-left: 1%; margin-top: 1%;");
    document.querySelector('.menu').setAttribute("style","left: -300px");
    info.setAttribute("style", "margin-left: 0px");

  }
  
});