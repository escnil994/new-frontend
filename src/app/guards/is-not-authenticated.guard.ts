import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces/auth-status.enum';
import Swal from 'sweetalert2';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {




  const authService = inject(AuthService)
  const router = inject(Router)



  if (authService.authStatus() !== AuthStatus.authenticated) {
    return true
  }



  router.navigate(['/'])


  Swal.fire({
    title: 'You are already loggued in',
    html: 'You are redirected to home ...',
    timer: 2000,
    didOpen: () => {
      Swal.showLoading()
    }
  })

  return false;

};
