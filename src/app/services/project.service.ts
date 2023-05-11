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



  getProjects(from: number = 0, limit: number = 0) {

    const url = `${backend_url}project/get-projects?from=${from}&limit=${limit}`;
    console.log(url);


    return this._http.get<ProjectInterface>(url).pipe(
      map(({ total, projects }) => {
        return{
          total,
          projects
        }
      })
    )


  }

}
