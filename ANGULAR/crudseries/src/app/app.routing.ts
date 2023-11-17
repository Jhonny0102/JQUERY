import { HomeComponent } from "./components/home/home.component";
import { SerieComponent } from "./components/serie/serie.component";

import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes =[
    {path:"" ,component: HomeComponent},
    {path:"serie/:id", component: SerieComponent}
]

export const appRoutingProvider: any[]= [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);