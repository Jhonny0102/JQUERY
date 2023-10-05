//Alternativa Jhon
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
            //Agreamos al contenedor del id indicado(padre) el siguiente objeto.
            $("#botones").append(boton);

            $("#imagenes").append(imagen);
            //Evento click cuando dan en el boton.
            boton.click(function(){
                //Guardamos en la variable el valor del objeto clickeado.
                var valorid = $(this).val();
                //console.log(valorid);
                //Agregamos el siguiente atributo al id indicado.
                $("#img" + valorid).attr("src","Images/perro.jpg");
            });
        };
    });
});
/*
//Version profesor Paco.
$(document).ready(function () {
    $("#rango").change(function () { 
        var numero = parseInt($(this).val());
        $("#numrango").text(numero);
        $("#botones").text("");
        $("#imagenes").text("");
        for( var i = 1 ; i <= numero ; i++){
            var boton = $("<button>",{
                "text": "Imagen " + i,
                "data-imagen" : i
            });
            var imagen = $("<img>" , {
                "src" : "Images/goku.jpg",
                "width" : "150px",
                "id": "imagen" +  i 
            });
            $("#botones").append(boton);
            $("#imagenes").append(imagen);
            boton.click(function(){
                var id=$(this).data("imagen");
                $("#imagen"+id).attr("src","Images/perro.jpg");
            });
        }
    });
});
*/