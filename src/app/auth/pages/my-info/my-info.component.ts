import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit{

  private utils: any = inject(UtilsService)
  image: string = 'col-4'

  info: string = 'col-8'

  public image01: string = ''


  ngOnInit(): void {

    if (window.screen.width < 900) {

      this.image = 'col-12'
      this.info = 'col-12'
    }

    this.utils.getImages().subscribe((data: any) => {


        this.image01 = data.images.image_01
      })

  }
}
