import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importamos aqui los dos components de routing
import { routing, appRoutingProvider } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CineComponent } from './components/cine/cine.component';
import { MusicaComponent } from './components/musica/musica.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorComponent } from './components/error/error.component';
import { DobleComponent } from './components/doble/doble.component';
import { MenucollatzComponent } from './components/menucollatz/menucollatz.component';
import { CollatzComponent } from './components/collatz/collatz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    MenuComponent,
    ErrorComponent,
    DobleComponent,
    MenucollatzComponent,
    CollatzComponent
  ],
  //Declaramos aqui el routing
  imports: [
    BrowserModule, routing
  ],
  //Declaramos aqui el appRoutingProvider  
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
