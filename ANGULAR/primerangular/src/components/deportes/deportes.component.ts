import {Component} from '@angular/core';

@Component ({
    selector:"app-deportes",
    templateUrl:"./deportes.component.html",
    styleUrls:["./deportes.component.css"]
})

export class DeportesComponent{
    public sports : Array<string>;
    public numeros : Array<number>;

    constructor(){
        this.sports = ["Futbol","VolleyBol","Golf","Piragüimo","Boxeo","Natacion"]
        this.numeros = [2,6,12,67,34,88,42,7,0,9,4,6,45];
    }
}