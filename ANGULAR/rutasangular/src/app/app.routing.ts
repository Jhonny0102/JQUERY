import { HomeComponent } from "./components/home/home.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { CineComponent } from "./components/cine/cine.component";
import { ErrorComponent } from "./components/error/error.component";
import { DobleComponent } from "./components/doble/doble.component";
import { CollatzComponent } from "./components/collatz/collatz.component";

//Necesitamos los siguientes modulos para realizar la declaracion de navegacion
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders} from "@angular/core";

//Definimos un array con nuestras rutas para los components.
const appRoutes: Routes =[
    {path:"" , component: HomeComponent},
    {path:"cine" , component: CineComponent},
    {path:"musica" , component: MusicaComponent},
    {path:"doble" , component: DobleComponent},
    {path:"doble/:numero" , component: DobleComponent},
    {path:"collatz/:numero" , component: CollatzComponent},
    {path:"**", component: ErrorComponent}
]

//Desde routing debemos exportar dos caracteristicas para implementarlas
//Dentro del module
//El proveedor de rutas
export const appRoutingProvider: any[] = [];

//El modulo routing indicando el array de rutas declarado
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);