import { Project } from "../models/project.model";

export interface ProjectInterface{
  total: number,
  projects: Project[],
  project: Project[],
  ok: true
}
