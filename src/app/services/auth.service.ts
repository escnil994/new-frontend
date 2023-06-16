import { catchError, map, Observable, of, subscribeOn, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter, inject, signal, computed } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginInterface } from '../interfaces/login.interface';
import { User } from '../interfaces/user.interface';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { CheckToken } from '../interfaces/check-token-interface';




@Injectable({
  providedIn: 'root'
})
export class AuthService {



  public statusLogged!: boolean


  private readonly base_url: string = environment.backend

  @Output() userEvent: EventEmitter<LoginInterface> = new EventEmitter<LoginInterface>




  public currentUser: any = computed(() => this._currentUser())
  public authStatus: any = computed(() => this._authStatus())

  private _currentUser = signal<User | null>(null)

  private _authStatus = signal<AuthStatus>(AuthStatus.checking)


  constructor(
    private _http: HttpClient,
  ) {
    this.checkAuthStatus().subscribe()
  }

  get token(): string {
    return localStorage.getItem('x-token') || ''
  }



  setAuthentication(user: User, token: string) {

    this._currentUser.set(user)
    this._authStatus.set(AuthStatus.authenticated)

    localStorage.setItem('x-token', token)

  }


  login(email: string, password: string) {
    const url = `${this.base_url}auth/login`

    const body = { email, password }

    return this._http.post<LoginInterface>(url, body).pipe(
      tap(({ user, token }) => {


        this.setAuthentication(user, token)


      }),
      map((user) => {
        return { user, result: true }
      }),
      catchError(err => throwError(() => err.error.msg
      ))
    )

  }


  checkAuthStatus(): Observable<boolean> {

    const url: string = `${this.base_url}auth/renew`

    const token = localStorage.getItem('x-token')

    if (!token || token === '' || token == undefined) {

      this.logout()

      return of(false)
    }


    const headers: HttpHeaders = new HttpHeaders().set(
      'x-token', token
    )


    return this._http.get<CheckToken>(url, { headers }).pipe(
      map((res) => {


        this.setAuthentication(res.user, res.token)

        return true
      }),
      catchError(() => {


        this._authStatus.set(AuthStatus.notAuthenticated)

        return of(false)

      })
    )

  }






  logout(){

    localStorage.removeItem('x-token')

    this._currentUser.set(null)

    this._authStatus.set( AuthStatus.notAuthenticated )
  }





}




