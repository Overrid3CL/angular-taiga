import { Component } from '@angular/core';
import { LayoutService } from './services/layout.service';
import { TuiBrightness } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loggedIn = false;
  themelight: TuiBrightness = 'onLight';
  constructor(public layoutService: LayoutService) {}
}
