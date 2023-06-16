import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStatus } from 'src/app/interfaces/auth-status.enum';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {


  private authService = inject(AuthService)
  private router = inject(Router)

  public authStatusChangeEffect = effect(() => {

    console.log(this.authService.authStatus());



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
