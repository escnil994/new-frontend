import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInfoComponent } from './pages/my-info/my-info.component';
import { MyContactsComponent } from './pages/my-contacts/my-contacts.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'escnil994-information',
    component: MyInfoComponent,
    data: { title: 'My Information'}
  },
  {
    path: 'escnil994-contact',
    component: MyContactsComponent,
    data: { title: 'My Contacts' }
  },
  {
    path: 'private/login/escnil994',
    component: LoginComponent,
    data: { title: 'Log-In' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
