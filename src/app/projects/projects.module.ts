import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';


@NgModule({
  declarations: [
    GetAllComponent,
    GetOneComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
