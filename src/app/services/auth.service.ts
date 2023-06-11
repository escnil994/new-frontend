import { map, Observable, subscribeOn, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginInterface } from '../interfaces/login.interface';
import { User } from '../interfaces/user.interface';




@Injectable({
  providedIn: 'root'
})
export class AuthService {



  public statusLogged!: boolean


  private readonly base_url: string = environment.backend

  @Output() userEvent: EventEmitter<LoginInterface> = new EventEmitter<LoginInterface>




  constructor(
    private _http: HttpClient,
  ) { }

  get token(): string {
    return localStorage.getItem('x-token') || ''
  }







  loginUser(data: any) {
    const url = `${this.base_url}auth/login`

    return this._http.post<LoginInterface>(url, data).pipe(map(data => {
      localStorage.setItem('x-token', data.token)

      return data
    }))


  }






  validateLogin() {

    const headers = new HttpHeaders({
      'x-token': this.token,
    })


    const url = `${this.base_url}auth/validate-token`

    return this._http.get(url, { headers }).pipe(
      tap((res: any) => {
        localStorage.setItem('x-token', res.token)
      }),
      map(res => {
        return res
      })
    )
  }
}




