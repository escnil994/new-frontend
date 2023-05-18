import { Comment } from './../../models/comment.model';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styles: [
  ]
})
export class CreateCommentComponent {

  public success: boolean = false

  public name: string = ''

  public formSubmitted: boolean = false

  public commentForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', [Validators.required, Validators.minLength(12)]]
  })

  constructor(
    private fb: FormBuilder,
    private _commentService: CommentService
  ) {

  }


  createComment() {

    this.formSubmitted = true

    if (this.commentForm.valid) {

      this._commentService.createComment(this.commentForm.value).subscribe((comment: any) => {

        if (comment.ok) {
          this.name = comment.comment.name
          this.success = true
          setTimeout(() => {
            this.success = false
          }, 3000);

        }

      }, err => {
        console.log(err);

      })
    }

  }

  validateFields(field: string): boolean {

    if (this.commentForm.get(field)?.invalid && this.formSubmitted) {
      return true
    } else {
      return false
    }
  }


}
