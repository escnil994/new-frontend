import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map } from 'rxjs';


import { PostInterface } from '../interfaces/post.interface';
import { Post } from '../models/post.model';
import { environment } from 'src/environments/environment.development';





@Injectable({
  providedIn: 'root'
})

export class BlogService {

  public backend_url = environment.backend


  constructor(
    private _http: HttpClient
  ) { }



  getPosts(from: number = 0, limit: number = 0) {


    const url: string = `${this.backend_url}blog/get-posts?from=${from}&limit=${limit}`

    console.log(url);

    return this._http.get<PostInterface>(url).pipe(
      map(({ total, posts }) => {

        return {
          total,
          posts
        }
      })
    )

  }
}
