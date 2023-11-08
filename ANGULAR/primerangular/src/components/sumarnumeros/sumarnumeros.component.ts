import { Component, ViewChild , ElementRef } from '@angular/core';

@Component({
    selector:"app-sumar-numeros",
    templateUrl:"./sumarnumeros.component.html"
})

export class SumarNumerosComponent{
    //Declaramos variables que hacen referencia al id de angular de los 
    //controles html
    @ViewChild("cajanumero1") cajanumero1Ref: ElementRef;
    @ViewChild("cajanumero2") cajanumero2Ref: ElementRef;

    public suma: number;

    //En angular todas las propiedades deben ser instanciadas con
    //un valor.
    //Los objetos de referencia deben indicar que son un nuevo objeto y
    //un valor por defecto para dicho objeto.
    //objetoRef = new ElementRef(Value por defecto)
    constructor(){
        this.suma = 0 ;
        this.cajanumero1Ref = new ElementRef(0);
        this.cajanumero2Ref = new ElementRef(0);
    }

    sumarNumeros():void{
        var num1 = this.cajanumero1Ref.nativeElement.value;
        var num2 = this.cajanumero2Ref.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }
}