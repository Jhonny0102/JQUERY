import { NgModule } from '@angular/core';
import {
   CommonModule} from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { ServiceCoches } from './services/service.coches';
//Importante esto para ver el router.outlet
import { routing, appRoutingProvider } from './app.routing';

//Permitir consumir APIS
import {HttpClientModule} from "@angular/common/http";
import { ServicePersonas } from './services/service.personas';
import { CochesComponent } from './components/coches/coches.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ServiceEmpleados } from './services/service.empleados';
import { VariasfuncionesComponent } from './components/variasfunciones/variasfunciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    HomeComponent,
    MenuComponent,
    PersonasapiComponent,
    CochesComponent,
    EmpleadosComponent,
    VariasfuncionesComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, routing , HttpClientModule
  ],
  providers: [ServiceComics, appRoutingProvider, ServicePersonas,ServiceCoches,ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
