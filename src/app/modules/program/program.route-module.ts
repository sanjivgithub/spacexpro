import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProgramComponent } from "./program.component";

const routes: Routes = [
    {path: '', component: ProgramComponent},
    {path: 'launches', component: ProgramComponent}
    // {path: '', 
    // loadChildren: () => import('./modules/program/program.module').then(m => m.ProgramModule)},
    // {path: '', redirectTo: '/index', pathMatch: 'full'},
    // {path: '**', component: PageNotFoundComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProgramRoutingModule { }
  