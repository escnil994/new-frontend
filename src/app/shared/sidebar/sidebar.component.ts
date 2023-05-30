import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public projects: Project[] = []


  constructor(
    private projectService: ProjectService
  ) { }


  ngOnInit(): void {


    this.projectService.getProjects(0,2).subscribe(({total, projects}) => {


      this.projects = projects

    })




  }

}
