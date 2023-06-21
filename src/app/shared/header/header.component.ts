import { Component, OnInit, effect } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from 'src/app/interfaces/auth-status.enum';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {




  public image: string = ''
  public name: string = ''

  public login: boolean = false


  public headerTitleModifible: string = 'ABOUT ME'


  constructor(
    private authService: AuthService,
    private router: Router,
    private utils: UtilsService
  ) {

    if(window.screen.width < 365){
      this.headerTitleModifible = 'ABOUT'
    }




  }



  ngOnInit(): void {

    this.utils.getImages().subscribe((data: any) => {

      this.image = data.images.image_01
    })



    this.authStatusChangedEfect

  }


  logout() {


    this.authService.logout()



    this.router.navigate(['/'])

    this.login = false



  }



  public authStatusChangedEfect = effect(() => {

    let isLoggued: string = this.authService.authStatus()

    if (isLoggued === AuthStatus.authenticated) {
      this.login = true
    }else{
      this.login = false

    }



  })




}
