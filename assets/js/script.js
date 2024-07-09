var enviarCorreo = $("#enviarCorreo");

enviarCorreo.click(function (e) {
  e.preventDefault();
    alert('El correo fue enviado correctamente...')
});


$(".recetain").on("dblclick",function(){
  $(".recetain").css({"color":"red"});
});

$(".recetapre").on("dblclick",function(){
  $(".recetapre").css({"color":"red"});
});

$(".card-title").click(function(){
  $(".card-text").toggle();
});

var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})