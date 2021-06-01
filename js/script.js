$(document).ready(function() {
  var botao = $('.menu-dropdown');
  var dropDown = $('.ul-secundario');    
 
     botao.on('click', function(event){
         dropDown.stop(true,true).slideToggle();
         event.stopPropagation();
     });
 });
 