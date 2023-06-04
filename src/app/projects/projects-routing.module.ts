import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'get-all-projects',
    component: GetAllComponent,
    data: { title: 'Projects'}
  },
  {
    path: 'get-all-projects/get-project/:id',
    component: GetOneComponent,
    data: { title: 'Project'}
  },
  {
    path: 'create-project',
    canActivate: [AuthGuard],
    component: CreateProjectComponent,
    data: { title: 'Creating project'}
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
