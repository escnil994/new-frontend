import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';


import { environment } from 'src/environments/environment.development';
import { ProjectInterface } from '../interfaces/project.interface';


const backend_url = environment.backend


@Injectable({
  providedIn: 'root'
})


export class ProjectService {



  constructor(
    private _http: HttpClient
  ) { }

  get token(){
    return localStorage.getItem('x-token') || '';
  }



  getProjects(from: number = 0, limit: number = 0) {

    const url = `${backend_url}project/get-projects?from=${from}&limit=${limit}`;


    return this._http.get<ProjectInterface>(url).pipe(
      map(({ total, projects }) => {
        return{
          total,
          projects
        }
      })
    )


  }


  getProject(id: string){
    const url = `${backend_url}project/get-project/${id}`;

    return this._http.get<ProjectInterface>(url).pipe(
      map( ({project, ok}) => {
        return {
          project,
          ok
        }
      })
    )
  }


  createProject(project: any) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    const url = `${backend_url}project/create-new-project`;

    return this._http.post<ProjectInterface>(url, project, {headers}).pipe(
      map( ({project, ok}) => {
        return {
          project,
          ok
        }
      })
    )
  }

}
