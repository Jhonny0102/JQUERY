import { HomeComponent } from "./components/home/home.component";
import { InsertarComponent } from "./components/insertar/insertar.component";
import { EditdepartamentoComponent } from "./components/editdepartamento/editdepartamento.component";

import{Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes : Routes = [
    {path:"" , component: HomeComponent},
    {path:"insertar", component: InsertarComponent},
    {path:"edit/:id/:nombre/:localidad" , component: EditdepartamentoComponent}
]

export const appRoutingProvider: any [] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);