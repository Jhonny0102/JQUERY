import { Component, Input, Output , EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  @Input() comicPropiedad !: Comic;

  @Output() comicSeleccionado: EventEmitter<any> = new EventEmitter();

  @Output() comicEliminado: EventEmitter<any> = new EventEmitter();

  comicFavorito():void{

    this.comicSeleccionado.emit(this.comicPropiedad.titulo);
  }

  comicFuera():void{

    this.comicEliminado.emit(this.comicPropiedad.titulo);
  }

}
