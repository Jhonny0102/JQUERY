import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/components/primercomponent/primer.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { DeportesComponent } from 'src/components/deportes/deportes.component';
import { FormsBindingComponent } from 'src/components/formsbinding/formsbinding.component';
import { SumarNumerosComponent } from 'src/components/sumarnumeros/sumarnumeros.component';
import { TablaComponent } from 'src/components/tablamultiplicar/tabla.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
