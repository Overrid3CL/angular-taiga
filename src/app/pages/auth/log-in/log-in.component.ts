import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor() {
    console.log('LogInComponent constructor');
  }
}
