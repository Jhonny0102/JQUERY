$(document).ready(function () {

    //Al dar click en el id indicado hara los siguiente.
    $("#cargar").click(function () { 
        //Mensaje por consola.
        console.log("Antes del servicio");

        //Cogemos(Consumimos) del documento xml indicado u lo guardamos en data.
        $.get("documentos/empleados.xml", function (data) {

            //Curiosidad sobre porque en la consola se muestra al final este mensaje, lo muestra cuando se conecta.
            console.log("Leyendo servicio");
            
            //Creamos una variable vacia para agregar cosas en el futuro.
            var html = "";
            
            //Encontramos todos los APELLIDO dentro de la variable data(Contiene el documento cml).
            $(data).find("APELLIDO").each(function(){
                
                //Guardamos en la variable el texto que encontro.
                var apellido = $(this).text();
                
                //Agrega un elemento li con el texto de la variable, asi hara cada vez que encuentre una eqtiqueta APELLIDO.
                html += "<li>" + apellido + "</li>";
            });
            
            //Agregamos o escribimos en el id indicado el texto que se ha generado en la variable html.
            $("#lista").html(html);
        });
        
        //Mensaje por consola.
        console.log("Despues del servicio");   
    });
});