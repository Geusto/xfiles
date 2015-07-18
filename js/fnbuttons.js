
/*
 * Guardemos en localStorage cuando el formulario haya sido enviado.
 */

// Submit es la función jQuery que permite pillar cuando el usuario le dio click en enviar a un formulario
$('form').submit(function(e){   // Variable e corresponde al evento de enviar formulario
  e.preventDefault();           // Prevenir que al momento de dar click a enviar se recargue la página
  var value2 = $('#emailtxt').val();

  localStorage.setItem("subject", $('#nametxt').val()); // Guardar valor en subject
  localStorage.setItem("identi", $('#emailtxt').val()); // Guardar valor en subject

  console.log('Almacenamiento local exitoso. Agregados valores: subject('+$('#nametxt').val()+'), identi('+$('#emailtxt').val()+')');
  
});

$('#result').on('click', function(e){ // e es el evento de click nuevamente
  e.preventDefault();
  $('#nme').val(localStorage.getItem('subject'));
  $('#emil').val(localStorage.getItem('identi'));
});
