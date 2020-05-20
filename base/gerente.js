var buttonTeste = document.querySelector(".btn-menu");
var info = document.querySelector('.col-vendas');
var text = document.querySelector('.modulo');
var toggle = 0;

buttonTeste.addEventListener("click", event => {
  event.preventDefault();
  if(toggle == 0){
    buttonTeste.setAttribute("style", "margin-left: 15%");
    document.querySelector('.menu').setAttribute("style","left: 0px !important");
    info.setAttribute("style", "margin-left: 10%");
    text.setAttribute("style", "margin-left: 15%");
    toggle = 1;
  }else{
    toggle = 0;
    buttonTeste.setAttribute("style", " margin-left: 1%; margin-top: 1%;");
    document.querySelector('.menu').setAttribute("style","left: -300px");
    info.setAttribute("style", "margin-left: 0");
    text.setAttribute("style", "margin-left: 0");

  }
  
});

$(document).ready( function () {
  $('#table').DataTable({
    bFilter: false,
    bInfo: false,
    bPaginate: false
  });

  $('.data').daterangepicker({
    autoUpdateInput: false,
    locale: {
        cancelLabel: 'Clear'
    }
  });

  $('.data').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
  });

  $('.data').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
});
});