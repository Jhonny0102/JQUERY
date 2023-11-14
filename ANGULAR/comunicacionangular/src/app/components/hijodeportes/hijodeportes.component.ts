import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeportes',
  templateUrl: './hijodeportes.component.html',
  styleUrls: ['./hijodeportes.component.css']
})
export class HijodeportesComponent {
  @Input() sport !: string;

  //DEBEMOS DECLARAR EL METODO QUE RECIBIMOS DESDE EL PARENT
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  //CREAMOS UN METODO EN EL COMPONET HIJO PARA PODER REALIZAR
  //LA LLAMADA EN EL COMPONENT PADRE
  seleccionarFavoritoHijo(): void{
    //ESTE METODO LLAMARA AL PADRE
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
