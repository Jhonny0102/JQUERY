var url = "https://apicruddoctoresxml.azurewebsites.net/";
$(document).ready(function () {
    cargardoctores();

    //Boton insertar//
    $("#botoninsertar").click(function () { 
        //1.Obtenemos los valores
        var apellido = $("#apellido").val();
        var especialidad = $("#especialidad").val();
        var id_doctor = $("#id_doctor").val(); 
        var id_hospital = $("#id_hospital").val();
        var salario = $("#salario").val();

        var dataXML = xmlformato(apellido,especialidad,id_doctor,id_hospital,salario);

        var request = "api/Doctores";

        $.ajax({
            type: "POST",
            url: url + request,
            data: dataXML,
            contentType : "text/xml",
            success: function () {
                console.log("Nuevo doctor agregado");
                cargardoctores();
            }
        });
    });

    //Boton Actualizar datos//
    $("#botonupdate").click(function () { 
        
        var apellido = $("#apellido").val();
        var especialidad = $("#especialidad").val();
        var id_doctor = $("#id_doctor").val(); 
        var id_hospital = $("#id_hospital").val();
        var salario = $("#salario").val();
        
        var dataXML = xmlformato(apellido,especialidad,id_doctor,id_hospital,salario);

        var request = "api/Doctores";
    });



});

//Funciones y Herramientas.
function cargardoctores(){
    var request = "api/Doctores";
    $.get(url+request, function (data) {
        var html = "";
        console.log("Entrando en el get de cargardoctores");
        $(data).find("Doctor").each(function(){
            var apellido = $(this).find("Apellido").text();
            var especialidad = $(this).find("Especialidad").text();
            var id_doctor = $(this).find("IdDoctor").text();
            var id_hospital = $(this).find("IdHospital").text();
            var salario = $(this).find("Salario").text();

            html += "<tr>";
            html += "<td>" + apellido + "</td>";
            html += "<td>" + especialidad + "</td>";
            html += "<td>" + id_doctor + "</td>";
            html += "<td>" + id_hospital + "</td>";
            html += "<td>" + salario + "</td>";
            html += "</tr>";
        });
        $("#tabla tbody").html(html);
    });
}

function xmlformato(apellido,especialidad,id_doctor,id_hospital,salario){
    var dataXML = 
        "<Doctor>"
        + "<Apellido>" + apellido + "</Apellido>"
        + "<Especialidad>" + especialidad + "</Especialidad>"
        + "<IdDoctor>" + id_doctor + "</IdDoctor>"
        + "<IdHospital>" + id_hospital + "</IdHospital>"
        + "<Salario>" + salario + "</Salario>"
        + "</Doctor>";
    return dataXML;
};