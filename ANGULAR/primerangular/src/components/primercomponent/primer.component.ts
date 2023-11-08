import { Component } from "@angular/core";

@Component({

    //Debemos indicar el nombre del component mediante selector.
    //Se utilizan guiones para separar cada palabra del nombre del component
    selector:"primer-component",
    
    //Como no queremos un fichero html de template,
    //se utiliza la palabra template para indicar todo el dibujo aqui.
    //Las comillas son las que estan al lado de la P ``
    templateUrl:"./primer.componet.html",
    styleUrls:["./primer.component.css"]
})

//Todo component debe ser declarado como clase
//Dicho nombre de clase sera utilizado posteriormente en app.module.ts
export class PrimerComponent{

    //Las propiedades de un component se pueden en su dibujo
    //Dichas propiedades son tipadas
    public titulo: string ;
    public descripcion: string;
    public anyo: number;
    
    //El constructor de una clase es el primer metodo por el que
    //entra cualquier component. Aqui podemos incializar los valores de las propiedades.
    constructor(){
        //Para acceder a las propiedades de una clase se utiliza la palabra this
        this.titulo = "Miercoles de Puente";
        this.descripcion = "Aprediendo angular";
        this.anyo = 2023;
    }
}