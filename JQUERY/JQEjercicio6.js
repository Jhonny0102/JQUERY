$(document).ready(function () {
    $("#rango").change(function () { 
        var numero = parseInt($(this).val());
        $("#valorrango").text(numero);
        $("#hijo").text("");
        //console.log(numero);
        for(var i = 1 ; i <= numero ; i++){
            let aleatorio = parseInt(Math.random() * 100) + 1;
            var check = $("<input>",{
                "type":"checkbox",
                "name": aleatorio,
                "value": aleatorio
            });
            $("#hijo").append(check);
            $("#hijo").append(aleatorio);
            $("#hijo").append("<br>");

            check.click(function(){
                var resultado = parseInt($("#resultado").text());
                var valor = parseInt($(this).val());
                if($(this).is(":checked") == true){
                    resultado += valor;
                }
                else{
                    resultado -= valor;
                }
                $("#resultado").text(resultado);
            });
        };
    });
});