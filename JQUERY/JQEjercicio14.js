var urlEmpleados = "https://apiempleadosaction.azurewebsites.net/";
$(document).ready(function () {
    
    var requestOficios = "api/Empleados/GetOficios/oficios";
    $.getJSON(urlEmpleados+requestOficios,function (data) {
        console.log("Entro")
        $.each(data, function(index,oficio){
            var select = $("<option>",{
                "value" : oficio,
                "text" : oficio
            });
            $("#oficios").append(select);

            select.click(function(){
                var ok_oficio = $(this).val();
                //console.log(ok_oficio);
                var requestBuscar="/api/Empleados/GetEmpleadosOficio/empleadosoficio/"+ok_oficio;
                $.ajax({
                    type: "GET",
                    url: urlEmpleados+requestBuscar,
                    success: function () {
                        $.getJSON(urlEmpleados+requestBuscar,function (data) {
                            var html = "";
                            $.each(data, function (index,empleado) { 
                                html += "<tr>";
                                html += "<td>" + empleado.apellido + "</td>";
                                html += "<td>" + empleado.oficio + "</td>";
                                html += "<td>" + empleado.salario + "</td>";
                                html += "<td>" + empleado.director + "</td>";
                                html += "</tr>";
                            });
                            //console.log("LLego hasta la tabla");
                            $("#tabla tbody").html(html);     
                        });
                    }
                });
            });
        });
    });



});