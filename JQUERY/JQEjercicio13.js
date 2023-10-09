var urldept = "https://apicruddepartamentoscore.azurewebsites.net/"

var urlemple = "https://apiempleadosspgs.azurewebsites.net/";

$(document).ready(function () {
    
    var requestDepartamento = "api/Departamentos";
    $.getJSON(urldept+requestDepartamento, function (data) {
        $.each(data, function(index,departamento){
            var li = $("<li>", {
                "text": departamento.nombre
            });
            $("ul").append(li);
            var link = $("<a>",{
                "href" : "#",
                "text" : "Empleado",
                "data-iddepartamento" : departamento.numero
            });
            $(li).append(link);
            link.click(function(){
                var idDepar = $(this).data("iddepartamento");
                var requestEmpleado = "api/Empleados/EmpleadosDepartamento/"+idDepar;
                $.ajax({
                    type: "GET",
                    url: urlemple+requestEmpleado,
                    success: function () {
                        var html = "";
                        $.each(data, function (index,empleado) { 
                            html += "<tr>";
                            html += "<td>" + empleado.apellido + "</td>";
                            html += "<td>" + empleado.oficio + "</td>";
                            html += "<td>" + empleado.salario + "</td>";
                            html += "<td>" + empleado.departamento + "</td>";
                            html += "</tr>";
                        });
                        $("#tablaemple tbody").html(html);
                    }
                });
            });
        });
    });
    
});


//Forma No dinamica
    // $("a").click(function () { 
    //     var dep = $(this).text();
    //     var numero;
    //     if(dep == "Empleado Disney"){
    //         numero = 10;
    //     }
    //     if(dep == "Empleado Terra"){
    //         numero = 20;
    //     }
    //     if(dep == "Empleado Port"){
    //         numero = 30;
    //     }
    //     if(dep == "Empleado Warner"){
    //         numero = 40;
    //     }
    //     //alert(numero);
    //     var request = "api/Empleados/EmpleadosDepartamento/"+numero;

    //     $.getJSON(urlemple+request, function (data) {
    //         var html = "";
    //         $.each(data,function(index,empleado){
    //             html += "<tr>";
    //             html += "<td>" + empleado.idEmpleado + "</td>";
    //             html += "<td>" + empleado.apellido + "</td>";
    //             html += "<td>" + empleado.oficio + "</td>";
    //             html += "<td>" + empleado.salario + "</td>";
    //             html += "<td>" + empleado.departamento + "</td>";
    //             html += "</tr>";
    //         });
    //         //alert("Entra");
    //         $("#tablaemple tbody").html(html);
    //     });
    // });