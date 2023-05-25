import { Post } from 'src/app/models/post.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styles: [
  ]
})
export class GetOneComponent implements OnInit {

  public post: any

  constructor(
    private router: Router,
    private blogService: BlogService  ){

  }


  ngOnInit(){


    const id = this.router.url.split('/')[4].split('&')[0]


    this.getPost(id)


  }

  getPost(id: string){
    this.blogService.getPost(id).subscribe( ({post}) => {
      this.post = post

    })
  }

}
