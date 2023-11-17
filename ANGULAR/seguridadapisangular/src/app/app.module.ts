import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ServiceEmpleados } from './services/service.empleados';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
