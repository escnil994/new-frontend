import { Component, Input, OnInit } from '@angular/core';
import {  ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public url: string = ''

  @Input() banner: string = ''

  public projects: Project[] = []

  public info: boolean = false

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private utilsService: UtilsService
  ) {}


  ngOnInit(): void {



    {
      this.router.events.pipe(
        filter((event) => event instanceof ActivationEnd ),
        filter( (event: any) => event.snapshot.firstChild === null),
        map( (event: ActivationEnd) => event.snapshot.routeConfig )
      ).
      subscribe( (res) => {

        if(res?.path === 'escnil994-information'){
          this.info = true

          this.utilsService.getImages().subscribe((data: any) => {
            this.url = data.images.image_10
          })

        } else {

          this.info = false

          }

      })
    }









    this.projectService.getProjects(0,2).subscribe(({total, projects}) => {


      this.projects = projects

    })




  }




}
