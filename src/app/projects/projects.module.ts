import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GetAllComponent,
    GetOneComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProjectsRoutingModule,
    SharedModule,
  ]
})
export class ProjectsModule { }
