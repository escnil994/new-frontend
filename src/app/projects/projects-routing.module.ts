import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { isAuthenticatedGuard } from '../guards/is-authenticated.guard';
import { BannerComponent } from '../shared/banner/banner.component';

const routes: Routes = [
  {
    path: 'get-all-projects',
    component: GetAllComponent,
    data: { title: 'Projects', banner: 'Projects List'}
  },
  {
    path: 'get-all-projects/get-project/:id',
    component: GetOneComponent,
    data: { title: 'Project', banner: 'Project'}
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
    canActivate: [isAuthenticatedGuard],
    data: { title: 'Creating project', banner: 'Creating a new project'}
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
export class ProjectsRoutingModule { }
