import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';
import { CreateComponent } from './create/create.component';
import { isAuthenticatedGuard } from '../guards/is-authenticated.guard';

const routes: Routes = [
{
  path: 'get-all-posts',
  component: GetAllComponent,
  data: { title: 'Posts', banner: 'Posts List' }
},
{
  path: 'get-all-posts/get-post/:id',
  component: GetOneComponent,
  data: { title: 'Post', banner: 'Post: ' }
},
{
  path: 'create-post',
  canActivate: [isAuthenticatedGuard],
  component: CreateComponent,
  data: { title: 'Creating a post', banner: 'New Post'}
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
