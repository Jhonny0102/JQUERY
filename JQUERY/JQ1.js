$(document).ready(function () {
    
    //Ocultar algo.
    $("h1").hide();

    //Cuando haces click en algo.
    $(".azul").click(function () {
        //Muestra por consola el mensaje. 
        console.log("Holaa");
        //Mostrar de nuevo el objeto.
        $("h1").show();
        //this: accede al objeto que ha realizado la llamada.
        //$("p").hide();
        //$(this).hide();
    });
});