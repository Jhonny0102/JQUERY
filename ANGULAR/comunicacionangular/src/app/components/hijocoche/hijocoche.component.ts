import { Component } from '@angular/core';
import { Coche } from 'src/app/models/Coche';

@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css']
})
export class HijococheComponent {
  public car: Coche;
  public mensaje!: string;
  constructor() {
    this.car = new Coche("Pontiac", "Firebird", 250, 20, false);
  }

  //TENDREMOS UN METODO QUE DEVOVERA TRUE O FALSE
  //SI EL COCHE ESTA APAGADO O ENCENDIDO
  comprobarEstado(): boolean {
    if (this.car.estado == false){
      this.mensaje = "El coche está apagado";
      this.car.velocidad = 0;
      return false;
    }else{
      this.mensaje = "El coche está encendido";
      return true;
    }
  }

  //TENDREMOS UN METODO PARA ENCENDER EL COCHE
  encenderCoche(): void{
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  //TENDREMOS UN METODO PARA ACELERAR EL COCHE
  acelerarCoche(): void {
    if (this.comprobarEstado() == false){
      alert("¿Dónde vas???, el coche está Apagado!!!");
    }else{
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
    }
  }
}
