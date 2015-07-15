$(document).ready(function(){    
    $('#guardar').click(function(){      
    
    //funcion para captura en inputs
    var nom = document.getElementById("nametxt").value;
    var mail = document.getElementById("emailtxt").value;
            
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
        document.getElementById("nme").innerHTML= name;
        document.getElementById("emil").innerHTML= email;            
        
    });   
});
