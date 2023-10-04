$(document).ready(function () {
    $("#boton").click(function () { 
        //Guardamo los valores de los imputs.
        var dia = parseInt($("#dia").val());
        var mes = parseInt($("#mes").val());
        var año = parseInt($("#anio").val());
        var semana = ["Sabado" , "Domingo" , "Lunes" , "Martes" , "Miercoles" , "Jueves" , "Viernes"]
        
        //Condicion donde cambiamos valores.
        if(mes == 1){
            mes=13;
            año=año-1;
        }   

        if(mes == 2){
            mes = 14;
            año=año-1;
        }

        // Multiplicar el Mes más 1 por 3 y dividirlo entre 5 
        var mesO = ((mes + 1) * 3)/5;

        //Dividir el año entre 4
        var año1 = año/4;

        //Dividir el año entre 100
        var año2 = año/100;

        //Dividir el año entre 400 
        var año3 = año/400;

        //Sumar el dia, el doble del mes, el año, el resultado de la operación 1 
        //el resultado de la operación 2 
        //menos el resultado de la operación 3 más la operación 4 más 2. 
        var opera1 = dia + (mes * 2 ) + año + mesO + año1 - año2 + año3 + 2 ;

        //Dividir el resultado anterior entre 7.
        var opera2 = parseInt(opera1) / 7; 

        //Restar el número del paso 5 con el número del paso 6 por 7.
        var opera3 = opera1 - (parseInt(opera2) * 7);
        opera3 = parseInt(opera3);
        console.log(opera3);
        //Mostramos el dia de la semana
        $("#mostrar").text("Naciste un dia : " + semana[opera3]);


        ///Ver que pasa ///
    });
});