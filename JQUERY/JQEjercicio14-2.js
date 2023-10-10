//Variable global , en este caso guarda el url del servidor a consumir.
var urlEmpleados = "https://apiempleadosaction.azurewebsites.net/";
$(document).ready(function () {
    //Variable reuqest, aqui guardamos el lo que queremos consumir.
    var requestOficios = "api/Empleados/GetOficios/oficios";
    //Guardamos en documento json en data.
    $.getJSON(urlEmpleados+requestOficios,function (data) {
        //console.log("Entro")
        //Recorremos todos los bojetos de data.
        $.each(data, function(index,oficio){
            //Creamos un objeto select con sus atributos, en este caso guarda el oficio que
            //hay dentro.
            var select = $("<option>",{
                "value" : oficio,
                "text" : oficio
            });
            //Agregamos el objeto select en el id indicado.
            $("#oficios").append(select);
            //Cuando dan click en un select.
            select.click(function(){
                //Guardamos el valor del selec seleccionado.
                var ok_oficio = $(this).val();
                //console.log(ok_oficio);
                //Variable request , en este caso guardamos el link a consumir.
                var requestBuscar="/api/Empleados/GetEmpleadosOficio/empleadosoficio/"+ok_oficio;
                //Metodo ajax para obtener los datos.
                $.ajax({
                    type: "GET",
                    url: urlEmpleados+requestBuscar,
                    success: function () {
                        //Cuando entre en este apartado funcional hara lo siguiente.
                        //Guardamos el documento json donde pasamos ciertos parametros
                        //y lo gurdamos en data.
                        $.getJSON(urlEmpleados+requestBuscar,function (data) {
                            //Variable para pintar.
                            var html = "";
                            //Recorremos todo los objetos.Lo parametros index y empleado 
                            //son necesarios pero los puedes cambiar el nombre segun necesidad.
                            $.each(data, function (index,empleado) { 
                                //Pintamos la tabla.
                                html += "<tr>";
                                html += "<td>" + empleado.apellido + "</td>";
                                html += "<td>" + empleado.oficio + "</td>";
                                html += "<td>" + empleado.salario + "</td>";
                                html += "<td>" + empleado.director + "</td>";
                                html += "</tr>";
                            });
                            //console.log("LLego hasta la tabla");
                            //Agregamos el html en el id indicado.
                            $("#tabla tbody").html(html);     
                        });
                    }
                });
            });
        });
        //HAy que verlo proque no se cambia
        $("#botonincremento").click(function () { 
            var oficio = $("#oficios").val();
            var incremento = parseInt($("#cajaincremento").val());
            console.log(oficio + " " + incremento);
            var request = "api/empleados/incrementarsalariooficios/"+oficio+"/"+incremento;
            $.ajax({
                type: "PUT",
                url: urlEmpleados+request,
                success: function () {
                    console.log("Datos modificado");
                }
            });
        });
    });



});