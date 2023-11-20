import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { CubosmarcaComponent } from "./components/cubosmarca/cubosmarca.component";
import { DetallescuboComponent } from "./components/detallescubo/detallescubo.component";
import { LoginComponent } from "./components/login/login.component";
import { OpcionesComponent } from "./components/opciones/opciones.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { ComprasComponent } from "./components/compras/compras.component";
import { RealizarcomprasComponent } from "./components/realizarcompras/realizarcompras.component";
const appRoutes : Routes = [

    {path: "" , component: HomeComponent},
    {path: "cubosmarca/:id" , component: CubosmarcaComponent},
    {path: "detallescubo/:id" , component: DetallescuboComponent},
    {path: "login" , component: LoginComponent},
    {path: "opciones" , component: OpcionesComponent},
    {path: "perfil" , component: PerfilComponent},
    {path: "compras" , component: ComprasComponent},
    {path: "realizarcompras" , component: RealizarcomprasComponent}
]

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);