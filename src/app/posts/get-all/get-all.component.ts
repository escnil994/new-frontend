import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styles: [
  ]
})
export class GetAllComponent implements OnInit {



  public posts: Post[] = []

  public limit: number = 2

  public from: number = 0


  public total: number = 0


  public next: string = 'btn-primary'

  public previous: string = 'btn-secondary'


  constructor(
    private blogService: BlogService
  ) {

  }
  ngOnInit(): void {

    this.getPosts()


  }


  getPosts() {


    this.blogService.getPosts(this.from, this.limit).subscribe(({ total, posts }) => {
      this.total = total

      this.posts = posts

    })



  }



  changePage(value: number = 0) {

    if(value === 0){
      this.next = 'btn-primary'
      this.previous = 'btn-secondary'
    }
    this.next = 'btn-primary'
    this.previous = 'btn-primary'


    this.from += value

    if (this.from <= 0) {
      this.from = 0
      this.previous = 'btn-secondary'

    } else if (this.from >= this.total-this.limit) {
      this.from = this.total
      this.next = 'btn-secondary'
      this.from -= value
    }

    this.getPosts()
  }

}
