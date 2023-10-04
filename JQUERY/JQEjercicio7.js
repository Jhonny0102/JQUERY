$(document).ready(function () {
    //Capturamos el cambio que haya en rango.
    $("#rango").change(function () { 
        //Guardamos el valor de este rango.
        var numero = parseInt($(this).val());
        //Cambiamos el valor del id indicado por el nuevo valor.
        $("#numrango").text(numero);
        //Limpiamos la caja del id botones.
        $("#botones").text("");
        //Limpiamos la caja del id imagenes.
        $("#imagenes").text("");
        //Bucle donde damos las vueltas que se indica en el rango.
        for(var i = 1 ; i <= numero ; i++){
            //Guardamos y creamos el boton con las siguientes atributos.
            var boton = $("<button>",{

                "text": "Imagen " + i,

                "id": "bt" + i,

                "value":  i
            });

            var imagen = $("<img>" , {

                "src" : "Images/goku.jpg",

                "width" : "150px",

                "id": "img" +  i 

            });

            $("#botones").append(boton);

            $("#imagenes").append(imagen);

            boton.click(function(){
                var valorid = $(this).val();
                console.log(valorid);
                $("#img" + valorid).attr("src","Images/perro.jpg");
            });

        };


    });
});