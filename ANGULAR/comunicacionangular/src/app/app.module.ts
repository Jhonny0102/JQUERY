import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { DetallesproductoComponent } from './components/detallesproducto/detallesproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    DetallesproductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
