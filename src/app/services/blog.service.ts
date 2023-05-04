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



  getPosts(){    
    

    const url: string = `${this.backend_url}/blog/get-posts`

    return this._http.get<PostInterface>(url).pipe(
      map( res => {
        const posts = res.posts.map(
          posts => new Post(posts.title, posts.intro, posts.content, posts.author, posts.url, posts.date, posts.image)
        )

        return posts
      })
    )
    
  }
}
