import { Component } from '@angular/core';
import { trigger, animate, animateChild, group, transition, style, query } from '@angular/animations';
import { fadeAnimation } from './animations/fade-in.animation';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Ricardo Sousa\'s resume';

  public appLoaded = false;

  constructor() {
    window.addEventListener('load', () => {
      this.appLoaded = true;
    });
  }
  public getRouterOutletState(outlet) {
    return outlet.activatedRouteData.name;
  }

}