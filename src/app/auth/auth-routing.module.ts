import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInfoComponent } from './pages/my-info/my-info.component';
import { MyContactsComponent } from './pages/my-contacts/my-contacts.component';

const routes: Routes = [
  {
    path: 'escnil994-information',
    component: MyInfoComponent
  },
  {
    path: 'escnil994-contact',
    component: MyContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
