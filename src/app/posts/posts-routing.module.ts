import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';

const routes: Routes = [{
  path: 'get-all-posts',
  component: GetAllComponent
},
{
  path: '',
  redirectTo: 'get-all-posts',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
