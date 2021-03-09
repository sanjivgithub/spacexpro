import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProgramComponent } from './modules/program/program.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/program/program.module').then(m => m.ProgramModule)}
  // {path: '', loadChildren: './modules/program/program.module#ProgramModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
