import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styles: [
  ]
})
export class GetAllComponent implements OnInit{

  
  public posts: Post [] = []


  constructor(
    private blogService: BlogService
  ){
 
  }
  ngOnInit(): void {
    
    this.blogService.getPosts().subscribe(posts => {


      console.log(posts.length);
      
      this.posts = posts


    })


  }




}
