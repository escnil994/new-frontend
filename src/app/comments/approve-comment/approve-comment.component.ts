import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-delete-comment',
  templateUrl: './approve-comment.component.html',
  styles: [
  ]
})
export class ApproveCommentComponent implements OnInit {


  constructor(
    private router: Router,
    private commentsService: CommentService
  ) {

  }


  ngOnInit(): void {

    const id = this.router.url.split('/')[3]

    this.commentsService.getComment(id).subscribe(res => {

      if (res) {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'This link has been already used!',
        })

        this.router.navigate(['/blog/get-all-posts']);
      } else {


        Swal.fire({
          title: 'Do you want to approve this comment?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, approve it!'
        }).then((result) => {
          if (result.isConfirmed) {

            this.commentsService.deleteComent(id).subscribe((res: any) => {

              if (res.ok) {
                Swal.fire(
                  'Approved!',
                  'Comment has been approved.',
                  'success'
                )

                this.router.navigate(['/blog/get-all-posts']);

              } else {
                Swal.fire(
                  'Error!',
                  'Error approving this comment.',
                  'error'
                )
                this.router.navigate(['/blog/get-all-posts']);

              }

            })

          }
        })

      }

    }

    )
  }

}
