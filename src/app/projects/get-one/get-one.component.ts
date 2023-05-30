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

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) { }


  ngOnInit() {

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);



    const id = this.router.url.split('/')[4].split('&')[0]



    this.getProject(id)

  }


  getProject(id: string) {

    this.projectService.getProject(id).subscribe(({ project, ok }) => {

      this.project = project

    })

  }




}
