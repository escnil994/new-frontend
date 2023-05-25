import { Comment } from './../../models/comment.model';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-get-comments',
  templateUrl: './get-comments.component.html',
  styles: [
  ]
})
export class GetCommentsComponent implements OnInit{

  public comments: Comment [] = []

  public letter: string = ''

  public limit: number = 3

  public from: number = 0

  public total: number = 0


  public next: string = 'btn-primary'

  public previous: string = 'disabled'



  constructor(
    private _commentService: CommentService
  ){

  }

  ngOnInit(){
    this.getComments()

  }



  getComments(){
    this._commentService.getComments(this.from, this.limit).subscribe( (res) => {

      this.comments = res.comments

      this.total = res.total

    })
  }




  changePage(value: number = 0) {

    if(value === 0 || value < 0){
      this.next = 'btn-primary'
      this.previous = 'disabled'
    }
    this.next = 'btn-primary'
    this.previous = 'btn-primary'


    this.from += value

    if (this.from == 0) {
      this.from = 0
      this.previous = 'disabled'

    } else if (this.from >= this.total-this.limit) {
      this.from = this.total
      this.next = 'disabled'
      this.from -= value
    }



    this.getComments()
  }



}
