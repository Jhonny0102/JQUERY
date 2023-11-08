import {Component , ViewChild, ElementRef} from '@angular/core';

@Component({
    selector:"app-tabla-multiplicar",
    templateUrl:"./tabla.component.html"
})

export class TablaComponent{
    @ViewChild("cajanumero") cajanumeroRef: ElementRef;

    public resultados : Array<number>;
    public numeroGet : number;

    constructor(){
        this.resultados = [];
        this.numeroGet = 0;
        this.cajanumeroRef = new ElementRef(0);
    }

    multiplicacion():void {
        this.numeroGet = this.cajanumeroRef.nativeElement.value; 
        var numero = this.cajanumeroRef.nativeElement.value;
        this.resultados=[];
        for(let i=0 ; i <= 10 ;i++){
            this.resultados.push(i*parseInt(numero))
        }
        //console.log(this.resultados);
    }
}