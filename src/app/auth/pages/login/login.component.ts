import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStatus } from 'src/app/interfaces/auth-status.enum';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _authService = inject(AuthService)


  public loginSucccess: boolean = false
  public loginFailed: boolean = false
  public loginMessage: string = ''

  public validForm: boolean = false

  public loginForm = this.fb.group({
    email: [localStorage.getItem('user')||'', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  })









  ngOnInit() {








  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }





  public authStatusChangeEffect = effect(() => {


    switch (this.authService.authStatus()) {

      case AuthStatus.checking:
        return
      case AuthStatus.notAuthenticated:


        return

      case AuthStatus.authenticated:


        Swal.fire({
          title: 'You are logged correctly',
          html: 'You are redirected to home ...',
          timer: 2000,
          didOpen: () => {
            Swal.showLoading()
            this.router.navigate(['/'])
          }
        })

        return

    }
  })






  login() {
    const email: string = this.loginForm.value.email || ''
    const password: string = this.loginForm.value.password || ''


    if (this.loginForm.valid) {



      this._authService.login(email, password).subscribe({
        next: (resp) => {

          if(this.loginForm.value.remember){
            localStorage.setItem('user', this.loginForm.value.email||'')
          }

          this.loginSucccess = true
          this.loginMessage = `Welcome ${resp.user.user.name}, you're being redirected  `

          setTimeout(() => {
            this.loginSucccess = false
            this.router.navigate(['/'])

          }, 0);




        },
        error: (msg) => {

          this.loginFailed = true
          this.loginMessage = ` ${msg}, try againg`

          this.loginForm.reset()

          setTimeout(() => {
            this.loginFailed = false
            this.validForm = false

          }, 3000);



        }

      })

    } else {

      this.validForm = true







    }



  }

}
