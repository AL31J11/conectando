// JavaScript Document
function LoginConectar (U,P)
{
	datos="usuario="+U+"&password="+P;
	$.ajax({
		type:"POST",
		url:" 192.168.1.167/Sitio6/Log_in_m.php",
		data: datos,
	}).done(function(msg){
		alert(msg);
		if (msg==""|| msg==null)
		{alert ("usuario incorrecto");}
		else
		{alert ("Bienvenido");}
	});//Function msg
}//funcion
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		$('.enviar').tap(function(){
			var formulario = $(this).parent('form');
			var usuraio = document.getElementByID ('Usuario').value;
			var password = document.getElementByID ('Password').value;
			LoginConectar(usuario,password);
		});//tap
	});//deviceready
});//ready
    
