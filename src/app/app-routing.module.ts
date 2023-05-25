import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./comments/comments.module').then(c => c.CommentModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  },
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
