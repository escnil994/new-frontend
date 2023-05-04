import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule, 
  ],

  exports: [
    HeaderComponent,
    BannerComponent, 
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
