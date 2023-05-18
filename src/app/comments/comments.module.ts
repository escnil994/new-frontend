import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';



import { CommentsRoutingModule } from "./comments-routing.module";
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { GetCommentsComponent } from './get-comments/get-comments.component';



@NgModule({
    declarations: [
    CreateCommentComponent,
    GetCommentsComponent
  ],
    imports: [
        CommonModule,
        CommentsRoutingModule,
        ReactiveFormsModule
    ],
    exports:[
      CreateCommentComponent,
      GetCommentsComponent
    ]
})



export class CommentModule{

}
