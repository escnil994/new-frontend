import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginInterface } from '../interfaces/login.interface';
import { User } from '../interfaces/user.interface';




@Injectable({
  providedIn: 'root'
})
export class AuthService {




  private readonly BaseUrl: string = environment.backend

  private _http = inject( HttpClient )
/*
  private _currentUser = signal<User|null>(null)
  private _authStatus = signal<AuthStatus>()
*/


  constructor(){}

  login(email: string, password: string){



  }



}




