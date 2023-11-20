import { Component,OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Compras } from 'src/app/models/model.compras';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-realizarcompras',
  templateUrl: './realizarcompras.component.html',
  styleUrls: ['./realizarcompras.component.css']
})
export class RealizarcomprasComponent implements OnInit{

  @ViewChild("cajaidcubo") cajaidcuboRef !: ElementRef;

  public token !: string;

  constructor(
    private _service : ServiceTienda
  ){}

  ngOnInit(): void {

  }

  insertarCompra():void{
    var tokenRecibido = localStorage.getItem("token");
    this.token = JSON.stringify(tokenRecibido);
    var idCubo = this.cajaidcuboRef.nativeElement.value;
    var newCompra = new Compras(idCubo,0,0,"2023-11-20T12:45:04.921Z");
    this._service.postComprarCubo(newCompra,this.token).subscribe(response => {
      console.log(response);
      alert("Compra realizada");
    })
  }

}
