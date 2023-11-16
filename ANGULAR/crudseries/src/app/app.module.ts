import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { rounting, appRoutingProvider } from './app.routing';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceSerie } from './services/service.series';
import { SerieComponent } from './components/serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,rounting,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProvider,ServiceSerie],
  bootstrap: [AppComponent]
})
export class AppModule { }
