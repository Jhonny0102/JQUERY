import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent {

  public arrayNumeros !: Array<number>;

  constructor(){

    this.arrayNumeros = [];
  }

  generarNumeros():void{

    for(let i=0 ; i < 10 ; i++){
      var random = Math.round(Math.random() * 100 + 1);
      //console.log(random);
      this.arrayNumeros.push(random);
      //console.log(this.arrayNumeros.length);
    }
  }

  ngOnInit(): void{

    this.generarNumeros();
  }
}
