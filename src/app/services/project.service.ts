import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';


import { environment } from 'src/environments/environment.development';
import { ProjectInterface } from '../interfaces/project.interface';
import { Project } from '../models/project.model';


const backend_url = environment.backend
 

@Injectable({
  providedIn: 'root'
})


export class ProjectService {



  constructor(
    private _http: HttpClient
  ) { }



  getProjects(){

    const url = `${backend_url}project/get-projects`;

    return this._http.get<ProjectInterface>(url).pipe(
      map( res => {
        const projects = res.projects.map(
          projects => new Project(projects.title, projects.subtitle, projects.content, projects.github, projects.url, projects.video, projects.date, projects.image)
        )


        return projects
      })
    )


  }

}
