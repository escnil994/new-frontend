import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styles: [
  ]
})
export class GetOneComponent implements OnInit {

  public project: any

  public dangerousVideoUrl: any
  public videoUrl: any

  constructor(
    private router: Router,
    private projectService: ProjectService
    , private _sanitizer: DomSanitizer
  ) {

   }


  ngOnInit() {


    const id = this.router.url.split('/')[4].split('&')[0]




    this.getProject(id)

  }


  getProject(id: string) {

    this.projectService.getProject(id).subscribe((res: any) => {

      this.project = res.project

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);


    })

  }







}
