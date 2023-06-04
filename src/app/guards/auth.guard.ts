import { CanActivateFn } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = async (route, state) => {



  return true;



}
