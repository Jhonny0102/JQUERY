import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  public producto!: Producto;

  constructor(private _activeRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var nombre = parametros["nombre"];
      var imagen = parametros["imagen"];
      var precio = parametros["precio"];
      this.producto = new Producto(nombre, imagen, parseInt(precio));
    })
  }
}
