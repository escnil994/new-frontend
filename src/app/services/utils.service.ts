import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private readonly base_url: string = environment.backend


  private _http = inject(HttpClient)

  constructor() {
    this.getImages().subscribe()
  }

  getImages(){
    const url: string = `${this.base_url}utils/image`;

    return this._http.get(url)

  }



}
