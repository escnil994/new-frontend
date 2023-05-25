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

  public limit: number = 2

  public from: number = 0


  public total: number = 0


  public next: string = 'btn-primary'

  public previous: string = 'disabled'


  constructor(
    private projectService: ProjectService
  ) {

  }
  ngOnInit(): void {

    this.getProjects()


  }


  getProjects() {


    this.projectService.getProjects(this.from, this.limit).subscribe(({ total, projects }) => {






      this.total = total




      this.projects = projects


    })



  }



  changePage(value: number = 0) {

    if(value === 0){
      this.next = 'btn-primary'
      this.previous = 'disabled'
    }
    this.next = 'btn-primary'
    this.previous = 'btn-primary'


    this.from += value

    if (this.from == 0) {
      this.from = 0
      this.previous = 'disabled'

    } else if (this.from >= this.total-this.limit) {
      this.from = this.total
      this.next = 'disabled'
      this.from -= value
    }

    this.getProjects()
  }

}
