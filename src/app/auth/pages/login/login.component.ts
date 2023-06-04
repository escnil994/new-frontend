import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: ['escnil994@gmail.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  })


  async ngOnInit() {


    /*
    this._authService.validateLogin().subscribe(response => {

      if (response) {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You are already Logged In',
          showConfirmButton: false,
          timer: 1500
        })

        setTimeout(() => {
          this.router.navigate(['/'])

        }, 1500);

      }

    }, err => {

    })

    */
  }

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) { }






  login() {
    /*
    this._authService.loginUser(this.loginForm.value).subscribe(data => {

      if (data.ok) {

        this._authService.userEvent.emit(data)
        Swal.fire(
          'Success', 'Logged In', 'success'
        )
        this.router.navigate(['/'])
      } else {
        Swal.fire(
          'Error',
          'Error Logging In',
          'error'
        )
      }
    }, err => {
      console.log(err);

      Swal.fire(
        'Error',
        'Error Logging In',
        'error'
      )
    })*/
  }

}
