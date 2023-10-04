$(document).ready(function () {
    $("#boton").click(function () { 
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var total = parseInt(num1) + parseInt(num2) ;
        $("#total").val(total);
    });

    $("#botontabla").click(function () { 
        var num = parseInt($("#caja").val());
        var html = "";
        for(var i = 1 ; i <= 10 ; i++){
            var resultado = num * i ;
            var operacion = num + " * " + i;
            html += "<tr>";
            html += "<td>" + operacion + "</td>";
            html += "<td>" + resultado + "</td>";
            html += "</tr>";
        }
        $("#tabla").html(html);
        
    });
});