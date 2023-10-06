$(document).ready(function () {

    $.get("documentos/clientes.xml", function (data) {

        $(data).find("CLIENTE").each(function(){
            var nombre = $(this).find("NOMBRE").text();
            var idcliente = $(this).attr("IDCLIENTE");
            var botones = $("<button>" , {
                "text" : nombre ,
                "id" : "cliente" + idcliente ,
                "value" : idcliente
            });
            $("#cajaboton").append(botones);

            $("#cliente" + idcliente).click(function () {
                console.log("Se dio click en cliente " + idcliente);
                var cliente = $("cliente"+idcliente).val();
            });
        });


    });

    // $.get("documentos/clientes.xml", function (data) {
        


    // });


});