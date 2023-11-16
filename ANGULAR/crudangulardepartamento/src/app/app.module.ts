import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Improtamos routing y appRoutingProvider y lo añadimos en NgModule e imports.
import { routing, appRoutingProvider } from './app.routing';

//Importamos FormsModule y HttpClientModule y lo añadimos en imports.
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceDepartamentos } from './services/service.departamentos';
import { InsertarComponent } from './components/insertar/insertar.component';
import { EditdepartamentoComponent } from './components/editdepartamento/editdepartamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InsertarComponent,
    EditdepartamentoComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProvider,ServiceDepartamentos],
  bootstrap: [AppComponent]
})
export class AppModule { }
