import { Component, OnInit, effect } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from 'src/app/interfaces/auth-status.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {




  public image: string = 'https://res.cloudinary.com/dorqesogu/image/upload/v1684950584/utils/B612_20220428_120412_479_b8uu8d.jpg'

  public name: string = ''

  public login: boolean = false


  constructor(
    private authService: AuthService,
    private router: Router
  ) {



  }



  ngOnInit(): void {

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
