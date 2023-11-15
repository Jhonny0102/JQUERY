import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { CochesComponent } from "./components/coches/coches.component";
import { EmpleadosComponent } from "./components/empleados/empleados.component";
import { VariasfuncionesComponent } from "./components/variasfunciones/variasfunciones.component";
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes : Routes = [
    {path:"" , component: HomeComponent},
    {path:"libreria" , component: LibreriaComponent},
    {path:"personasapi" , component: PersonasapiComponent},
    {path:"coches", component: CochesComponent},
    {path:"empleados", component: EmpleadosComponent},
    {path:"variasfunciones" , component: VariasfuncionesComponent}
]

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);