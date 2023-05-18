import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { commentInterface } from '../interfaces/comment.interface';
import { map } from 'rxjs';

const base_url = environment.backend
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private _http: HttpClient
  ) { }



  getComments(from: number = 0, limit: number = 0){

    const url: string = `${base_url}comment/get-comments?from=${from}&limit=${limit}`

    console.log(url);

    return this._http.get<commentInterface>(url)
  }


  createComment(data: any){
    console.log(base_url);

    const url: string = `${base_url}comment/create-new-comment`

    return this._http.post(url, data).pipe(
      map(comment => {
        return comment
      })
    )

  }
}
