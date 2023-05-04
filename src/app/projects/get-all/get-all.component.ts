import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styles: [
  ]
})
export class GetAllComponent {


  public projects: Project[] = []

  constructor(
    private projectService: ProjectService
  ){

    projectService.getProjects().subscribe(projects => {
      
      
      this.projects = projects
      
    })

  }

}
