import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CreateProjectComponent } from './create-project/create-project.component';


@NgModule({
  declarations: [
    GetAllComponent,
    GetOneComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    YouTubePlayerModule
  ]
})
export class ProjectsModule { }
