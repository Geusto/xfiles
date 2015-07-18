$(document).ready(function(){
    $('#guardar').click(function(){

    //funcion para captura en inputs
    // var nom = document.getElementById("nametxt").value;
    var nom = $('#nametxt').val();
    var mail = $("#emailtxt").val();

        localStorage.setItem("subject", nom);
        localStorage.setItem("identi", mail);

        /*document.getElementById("nametxt").value = "";
        document.getElementById("emailtxt").value = "";*/


    });
});

//funcion obtener
$(document).ready(function(){
    $('#result').click(function() {

        //Obtener datos almacenados
        var name = localStorage.getItem("subject");
        var email = localStorage.getItem("identi");

        //Mostrar datos almacenados
        $("#nme").html(name);
        $("#emil").html(email);            

    });
});
