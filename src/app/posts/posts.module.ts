import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { CreateComponent } from './create/create.component';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';
import { UpdateComponent } from './update/update.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateComponent,
    GetAllComponent,
    GetOneComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule, 
    SharedModule
  ],
  exports: [
    GetAllComponent
  ]
})
export class PostsModule { }
