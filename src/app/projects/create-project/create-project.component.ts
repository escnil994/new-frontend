import { Component, effect, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStatus } from 'src/app/interfaces/auth-status.enum';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';
import { FileUploadServiceService } from '../../services/file-upload-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {


  private authService = inject(AuthService)

  private router = inject(Router)

  private fb: FormBuilder = inject(FormBuilder)

  private projectService = inject(ProjectService)

  private fileUploadServiceService = inject(FileUploadServiceService)

  public imagePreview: string = 'https://res.cloudinary.com/dorqesogu/image/upload/v1684945877/utils/149071_vbgvli.png'

  public imageToUpload: any

  public saving: boolean = false

  public projectForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(12)]],
    content: ['', [Validators.required, Validators.minLength(30)]],
    github: [''],
    url: [''],
    video: [''],
    more: ['', [Validators.required, Validators.minLength(20)]],
    image: [''],

  })





  createProject() {


    if (this.projectForm.invalid) return

    this.projectService.createProject(this.projectForm.value).subscribe(
      (resp: any) => {

        this.saving = true

        console.log(resp);

        console.log(this.imageToUpload);



        if (resp.ok) {

          if (this.imageToUpload) {
            this.uploadImage(this.imageToUpload, resp.project._id)
          } else {
            this.saving = false
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Project has been saved successfully without image',
              showConfirmButton: false,
              timer: 1500
            })

          }
        }

        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })

        }

      },
      (err) => {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })

      }
    )




  }

  uploadImage(file: File, id: string) {
    this.fileUploadServiceService.imageUpdate(file, 'project', id).then(
      img => {
        console.log(img);

        if (img) {
          this.saving = false
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Project has been saved successfully',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          this.saving = false
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Project has been saved successfully without image',
            showConfirmButton: false,
            timer: 1500
          })

        }

        this.router.navigate(['/portfolio/get-all-projects/get-project/' + id])
      }
    )


  }




  onFileSelected(event: any) {

    const file: File = event.target.files[0]


    if (!file) return

    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onloadend = () => {

      this.imagePreview = reader.result as string

    }

    this.imageToUpload = file

  }








  public authStatusChangeEffect = effect(() => {



    switch (this.authService.authStatus()) {

      case AuthStatus.checking:
        break

      case AuthStatus.notAuthenticated:

        this.router.navigate(['/'])
        return

      case AuthStatus.authenticated:
        this.router.navigate(['/portfolio/create-project'])

        return

    }
  })



}
