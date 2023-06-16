import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApproveCommentComponent } from "./approve-comment/approve-comment.component";


const routes: Routes = [
  {
    path: 'approve-comment/:id',
    component: ApproveCommentComponent,
    data: { title: 'Approve Comment', banner: 'Aproving comment: '}
  }

]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})


export class CommentsRoutingModule{}
