import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

    this.authService.validateLogin().subscribe(response => {


      if (response.ok) {
        this.login = true


        this.name = response.name

      }



    })

  }



  ngOnInit(): void {


    this.authService.userEvent.subscribe(response => {


      if (response.ok) {
        this.login = true

        this.name = response.user.name

      }



    })


  }


  logout() {

    localStorage.removeItem('x-token')

    this.authService.userEvent.emit();



    this.router.navigate(['/'])

    this.login = false



  }





}
