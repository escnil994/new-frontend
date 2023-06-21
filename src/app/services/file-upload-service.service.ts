import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  private readonly _base_url: string = environment.backend

  constructor() { }




  async imageUpdate (
    file: File,
    type: 'post' | 'project',
    id: string
  ){
    try {
      const url = `${this._base_url}${type}/upload-image/${id}`;

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('x-token') || ''
        },
        body: formData
      })

      const data = await response.json();


      const image = await data.image.secure_url

      return data.ok

    } catch (error) {

      console.log(error);

      return false
    }

    return
  }




}
