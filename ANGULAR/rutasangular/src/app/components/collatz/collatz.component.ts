import { Component, OnInit ,DoCheck } from '@angular/core';
import { ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {

  public arrayNumero !: Array<number>;
  public numero !: number;

  constructor(private _activeRoute: ActivatedRoute){

    this.arrayNumero = [];
  }

  metodoCollatz():void{

    var numero = this.numero;

    this.arrayNumero = [];

    while(numero != 1){

      if(numero % 2 == 0){

        numero = numero / 2;
      }
      else{

        numero = numero * 3 + 1;
      }

      this.arrayNumero.push(numero);
    }
  }

  ngOnInit(): void {
    
    this._activeRoute.params.subscribe( (parametros: Params) => {

      this.numero=parametros["numero"];
    })

    this.metodoCollatz();
  }

  ngDoCheck(): void{

    this.metodoCollatz();
  }
}
