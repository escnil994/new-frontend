import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
{
  path: 'get-all-posts',
  component: GetAllComponent,
  data: { title: 'Posts' }
},
{
  path: 'get-all-posts/get-post/:id',
  component: GetOneComponent,
  data: { title: 'Post' }
},
{
  path: 'create-post',
  component: CreateComponent,
  data: { title: 'Creating a post'}
},
{
  path: '',
  redirectTo: 'get-all-posts',
  pathMatch: 'full',
  data: { title: 'Posts' }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
