import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html'
})
export class MyContactsComponent implements OnInit {

  public success: boolean = false

  public name: string = ''



  public habilitar: boolean = false


  public contactForm = this.fb.group({
    message: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]]
  })


  constructor(
    private fb: FormBuilder,
    private commenService: CommentService
  ) {
   }
  ngOnInit(): void {  }

  contactar() {

    if (this.contactForm.valid) {

      this.commenService.contactTo(this.contactForm.value).subscribe((res: any) => {

        this.contactForm.reset()

        if (res.ok) {
          Swal.fire(
            'Your message has been sent!',
            'You will be contacted soon, thanks',
            'success'
          )
        } else {
          Swal.fire(
            'Sorry!',
            'Message could not be sent, try again',
            'error'
          )
        }




      }, err => {
        Swal.fire(
          'Sorry!',
          'Message could not be sent, try again',
          'error'
        )
      })
    }

  }

  validateFields(field: string): boolean {

    const validForm = this.contactForm.valid

    if (!validForm ) {
      this.habilitar = true
      return false
    } else {
      this.habilitar = false
      return true
    }
  }

}
