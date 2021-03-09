import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { ProgramComponent } from './program.component';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { ProgramRoutingModule } from './program.route-module';


@NgModule({
  declarations: [
    FilterComponent,
    ProgramComponent,
    ProgramListComponent
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule
  ]
})
export class ProgramModule { }
