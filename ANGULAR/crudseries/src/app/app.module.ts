import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Recalco, importante importar estas extensiones
import { appRoutingProvider, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceSeries } from './services/service.series';
import { SerieComponent } from './components/serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,routing,HttpClientModule,FormsModule
  ],
  providers: [appRoutingProvider,ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
