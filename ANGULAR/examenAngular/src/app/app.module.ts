import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { routing, appRoutingProvider } from './app.routing';

import { ServiceTienda } from './services/service.tienda';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { LoginComponent } from './components/login/login.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { RealizarcomprasComponent } from './components/realizarcompras/realizarcompras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CubosmarcaComponent,
    DetallescuboComponent,
    LoginComponent,
    OpcionesComponent,
    PerfilComponent,
    ComprasComponent,
    RealizarcomprasComponent
  ],
  imports: [
    BrowserModule,FormsModule,routing,HttpClientModule
  ],
  providers: [appRoutingProvider, ServiceTienda],
  bootstrap: [AppComponent]
})
export class AppModule { }
