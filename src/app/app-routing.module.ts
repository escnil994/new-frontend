import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GetAllComponent } from "./posts/get-all/get-all.component";


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
