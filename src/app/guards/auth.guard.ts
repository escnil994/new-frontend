import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard  {


  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if (!this.authService.validateLogin()) {
      let timerInterval: any
      Swal.fire({
        title: 'You are not logged In!',
        html: 'Please log-in to access',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b: any = Swal.getHtmlContainer()?.querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
          this.router.navigate(['/'])
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {

        }
      })
      return false

    }

    console.log(this.authService);

    return this.authService.validateLogin()
  }
}
