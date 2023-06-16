import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInfoComponent } from './pages/my-info/my-info.component';
import { MyContactsComponent } from './pages/my-contacts/my-contacts.component';
import { LoginComponent } from './pages/login/login.component';
import { isNotAuthenticatedGuard } from '../guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: 'escnil994-information',
    component: MyInfoComponent,
    data: { title: 'My Information', banner: 'About me'}
  },
  {
    path: 'escnil994-contact',
    component: MyContactsComponent,
    data: { title: 'My Contacts', banner: 'Contact to me' }
  },
  {
    path: 'private/login/escnil994',
    canActivate: [isNotAuthenticatedGuard],
    component: LoginComponent,
    data: { title: 'Log-In', banner: 'Log In as Administrator' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
