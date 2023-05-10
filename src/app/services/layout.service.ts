import { Injectable } from '@angular/core';
import { TuiBrightness } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  light: TuiBrightness = 'onLight';
  constructor() {}

  toggleTheme() {
    this.light = this.light === 'onLight' ? 'onDark' : 'onLight';
    console.log(this.light);
  }
}
