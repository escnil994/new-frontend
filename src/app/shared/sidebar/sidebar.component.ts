import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
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

  public projects: Project[] = []

  public isAdmin: boolean = false

  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private router: Router,
  ) {


    this.authService.validateLogin().subscribe(response => {


      if (response.ok) {
        this.isAdmin = true
      }
    })




  }


  ngOnInit(): void {



    this.authService.userEvent.subscribe(({ok}) => {

      if (ok) {
        this.isAdmin = true

      }else{
        this.isAdmin = false
      }
    })






    this.projectService.getProjects(0,2).subscribe(({total, projects}) => {


      this.projects = projects

    })




  }


  logout(){
    localStorage.removeItem('x-token')
  }

}
