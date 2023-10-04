$(document).ready(function () {
    $("#boton").click(function () { 
        //Guardamos en los valores en las siguientes variables.
        var num1 = parseInt($("#num1").val());
        var num2 = parseInt($("#num2").val());
        var num3 = parseInt($("#num3").val());
        //Creamos unas variable en blanco para usarlos despues.
        var mayor, menor , intermedio;
       //Condiciones para guardar ciertos datos en las variables. 
        if(num1 > num2 && num1 > num3){
            mayor = num1;
        }
        else if(num2 > num1 && num2 > num3){
            mayor = num2;
        }
        else{
            mayor = num3;
        }

        if(num1 < num2 && num1 < num3){
            menor = num1;
        }
        else if(num2 < num1 && num2 < num3){
            menor = num2;
        }
        else{
            menor = num3;
        }
        //Sumamos los valores y lo guardamos.
        var total = num1 + num2 +num3;
        //Operamos los valores y lo guardamos.
        intermedio = total - mayor - menor;
        //Mostramos un mensaje en el id indicado.
        $("#resultado").text("Mayor : " + mayor + " , Menor : " + menor + " , Intermedio : " + intermedio);
    });
});