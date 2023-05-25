import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

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
    private projectService: ProjectService  ){ }


  ngOnInit(){


    const id = this.router.url.split('/')[4].split('&')[0]

    this.getProject(id)

  }


  getProject(id: string){

    this.projectService.getProject(id).subscribe(({project, ok}) => {

      this.project = project

    })

  }


}
