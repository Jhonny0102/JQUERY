import { ListaproductosComponent } from "./components/listaproductos/listaproductos.component";
import { HomeComponent } from "./components/home/home.component";
import { DetalleproductoComponent } from "./components/detalleproducto/detalleproducto.component";
import { HijococheComponent } from "./components/hijocoche/hijocoche.component";
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PadredeportesComponent } from "./components/padredeportes/padredeportes.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "productos", component: ListaproductosComponent}, 
    {path: "detalleproducto/:nombre/:imagen/:precio", component: DetalleproductoComponent},
    {path: "hijocoche", component: HijococheComponent},
    {path: "padredeportes" , component: PadredeportesComponent},
    {path: "libreria" , component: LibreriaComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
