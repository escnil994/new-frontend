import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';


import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MyInfoComponent } from './pages/my-info/my-info.component';
import { MyContactsComponent } from './pages/my-contacts/my-contacts.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    MyInfoComponent,
    MyContactsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
