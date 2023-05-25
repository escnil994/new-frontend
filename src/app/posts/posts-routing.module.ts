import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';

const routes: Routes = [
{
  path: 'get-all-posts',
  component: GetAllComponent
},
{
  path: 'get-all-posts/get-post/:id',
  component: GetOneComponent
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
