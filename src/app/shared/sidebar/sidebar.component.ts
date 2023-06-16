import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {


  @Input() banner: string = ''

  public projects: Project[] = []

  public isAdmin: boolean = false

  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private router: Router,
  ) {







  }


  ngOnInit(): void {








    this.projectService.getProjects(0,2).subscribe(({total, projects}) => {


      this.projects = projects

    })




  }




}
