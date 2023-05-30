import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { commentInterface } from '../interfaces/comment.interface';
import { Observable, map } from 'rxjs';

const base_url = environment.backend
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  @Output() commentsEvent: EventEmitter<commentInterface> = new EventEmitter<commentInterface>

  constructor(
    private _http: HttpClient
  ) { }



  getComments(from: number = 0, limit: number = 0): Observable<commentInterface>{

    if(from < 0){
      from = 0
    }

    const url: string = `${base_url}comment/get-comments?from=${from}&limit=${limit}`

    return this._http.get<commentInterface>(url)
  }

  getComment(id: string){
    const url: string = `${base_url}comment/get-comment/${id}`


    return this._http.get<commentInterface>(url).pipe(map( (res: any) => {
      return res.comment.allowed
    }))
  }


  createComment(data: any){

    const url: string = `${base_url}comment/create-new-comment`

    return this._http.post(url, data).pipe(
      map(comment => {
        this.getComments(0,3)
        return comment
      })
    )

  }


  deleteComent(id: string){
    const url: string = `${base_url}comment/autorize-comment/${id}`

    return this._http.put(url, id);

  }

  contactTo(data: any){

    const url: string = `${base_url}contact/contact-to-me`

    return this._http.post(url, data)

  }
}
