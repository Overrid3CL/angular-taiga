import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiDataListModule, TuiSvgModule } from '@taiga-ui/core';
import { Router, RouterModule } from '@angular/router';

interface Group {
  label: string;
  items: MenuItem[];
}

interface MenuItem {
  label: string;
  icon?: string | null;
  routerLink?: string | null;
  onClick?: () => void;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, TuiDataListModule, RouterModule, TuiSvgModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  readonly groups: Group[] = [
    {
      label: '',
      items: [
        {
          label: 'General',
          routerLink: '/components/input',
        },
        {
          label: 'Login connections',
          routerLink: '/components/input',
        },
        {
          label: 'Teams',
          routerLink: '/components/input',
        },
        {
          label: 'Billing',
          routerLink: '/components/input',
        },
        {
          label: 'Invoices',
          routerLink: '/components/input',
        },
        {
          label: 'My notifications',
          routerLink: '/components/input',
        },
      ],
    },
  ];
}
