import { Component, Inject, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [
  ]
})
export class BannerComponent{
  public sliderName: string = ''

  constructor(
    private router: Router
  ){
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd ),
      filter( (event: any) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data )
    ).
    subscribe( ({banner}) => {

      this.sliderName = banner

    })
  }






}
