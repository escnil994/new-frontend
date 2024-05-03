import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styles: []
})
export class GetOneComponent implements OnInit {
  public project: any;
  public videoUrl: SafeResourceUrl | undefined;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = this.router.url.split('/')[4].split('&')[0];
    this.getProject(id);
  }

  getProject(id: string) {
    this.projectService.getProject(id).subscribe((res: any) => {
      this.project = res.project;

      // Assuming project?.video contains the YouTube video ID
      const videoId = this.project?.video;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    });
  }
}
