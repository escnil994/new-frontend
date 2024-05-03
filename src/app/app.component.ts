import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthStatus } from './interfaces/auth-status.enum';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Nilson Escobar'; 
}
