import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { ServiceComics } from 'src/app/services/service.comics';


@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
  //DEBEMOS UTILIZAR PROVIDERS DENTRO DEL COMPONENT
  //PARA PODER INYECTAR NUESTRO SERVICIOS
  // providers:[ServiceComics]//Podemos poner varias servicios si tenemos
})
export class LibreriaComponent implements OnInit{

  @ViewChild("cajanombre") cajanombreRef !: ElementRef;

  @ViewChild("cajadescripcion") cajadescripcionRef !: ElementRef;

  @ViewChild("cajaimagen") cajaimagenRef !: ElementRef;

  public comics !: Array<Comic>;

  public comicFavorito !: Comic;

  //EN LOS CONSTRUCTORES NORMALMENTE SE UTILIZA LA INYECCION, NO LOS OBJETOS
  //QUE RECIBE. LAS ACCIONES SE SUELEN REALIZAR DENTRO DE ngOnInit
  constructor(private _service: ServiceComics){}

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  modificarComic(event: number): void{
    var nombre = this.cajanombreRef.nativeElement.value;

    var descripcion = this.cajadescripcionRef.nativeElement.value;

    var imagen = this.cajaimagenRef.nativeElement.value;

    this.comics[event] = new Comic(nombre, imagen, descripcion);
  }

  insertarComic():void{

    var titulo = this.cajanombreRef.nativeElement.value;

    var descripcion = this.cajadescripcionRef.nativeElement.value;

    var imagen = this.cajaimagenRef.nativeElement.value;

    var newComic = new Comic(titulo,imagen,descripcion);
    
    this.comics.push(newComic);
  }

  seleecionarFavorito(event: Comic){

    this.comicFavorito = event;
  }

  eliminarComic(event: number):void{

    this.comics.splice(event,1);
  }
}
