import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiLabelModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss'],
})
export class GeneralSettingsComponent {
  readonly nameForm = new FormGroup({
    name: new FormControl(''),
  });
}
