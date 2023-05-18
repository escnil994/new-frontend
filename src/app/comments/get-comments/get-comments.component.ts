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



  constructor(
    private _commentService: CommentService
  ){

  }

  ngOnInit(){
    this._commentService.getComments(0, 4).subscribe( res => {
      this.comments = res.comments

    })
  }


}
