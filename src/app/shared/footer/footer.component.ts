import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {


  constructor(
    private router: Router
  ){
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd ),
      filter( (event: any) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data )
    ).
    subscribe( ({title}) => {
      document.title = `Escnil994 - ${title}`

    })
  }

}
