import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TUI_BUTTON_OPTIONS, TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TuiButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: TUI_BUTTON_OPTIONS,
      useValue: {
        appearance: 'flat',
        size: 'm',
      },
    },
  ],
})
export class HomeComponent {}
