import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit{
  image: string = 'col-4'

  info: string = 'col-8'


  ngOnInit(): void {

    if (window.screen.width < 900) {

      this.image = 'col-12'
      this.info = 'col-12'
    }
  }
}
