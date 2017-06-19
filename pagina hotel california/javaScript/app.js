$(document).ready(function(){

  $("#imput").click(function(){
  	validarQueUserYpassSeanDiferentes();
  });


});



function validarQueUserYpassSeanDiferentes(){
	if (document.form.txtusuario.value == document.form.txtcontra.value)
	    {
			alert('¡La contraseña no puede ser igual al usuario!');
			document.form.txtusuario.focus();
		return;
		}
	else
	{
		/* Si todo está OK se prosigue con lo que sea: */
		    alert('¡Todo está bien, continue!');
		document.form.submit;
	}
}




function validar(){
	if (document.form.txtusuario.value == document.form.txtcontra.value)
	    {
			alert('¡La contraseña no puede ser igual al usuario!');
			document.form.txtusuario.focus();
		return;
		}
	else
	{
		/* Si todo está OK se prosigue con lo que sea: */
		    alert('¡Todo está bien, continue!');
		document.form.submit;
	}
}



$(document).on('ready', function(){

    $('#ingresar').on('click', function(){

        //$('#iniciar').hide();
        $('#iniciar').addClass('hide');
        $('.menuUsuario').removeClass('hide');
        //le permitimos eliminar los artículos
        $(".articulo .close").removeClass("hide");

        var email = $('#loginEmail').val();
        //$('.usuario span:first').text(email);
        $('#nombreUsuario').text(email);

        alert("Bienvenido al Blog de Velez!!!");
    });

    $("#salir").on('click', function(){
        $(".menuUsuario").addClass("hide");
        $("#iniciar").removeClass("hide");
        $(".articulo .close").addClass("hide");
    });

    $(".articulo .close").on('click', function(){
        //acá el this es el botón al que le hice click.
        $(this).parent().remove();
    });

});

