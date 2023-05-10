import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';
import {
  TUI_ARROW,
  TuiActionModule,
  TuiAvatarModule,
  TuiMarkerIconModule,
  TuiTabsModule,
} from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiDataListModule } from '@taiga-ui/core';
import { TuiHostedDropdownModule } from '@taiga-ui/core';
import { UserService } from 'src/app/services/user.service';

import { tuiIsString } from '@taiga-ui/cdk';
import { LayoutService } from 'src/app/services/layout.service';

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
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TuiAvatarModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiMarkerIconModule,
    TuiSvgModule,

    TuiTabsModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    public layoutService: LayoutService
  ) {}

  readonly groups: Group[] = [
    {
      label: '',
      items: [
        {
          label: 'Profile',
          icon: 'tuiIconUser',
          routerLink: '/components/input',
        },
        {
          label: 'Help center',
          icon: 'tuiIconHelpCircle',
          routerLink: '/components/input',
        },
      ],
    },
    {
      label: '',
      items: [
        {
          label: `Logout`,
          icon: 'tuiIconLogOut',
          onClick: () => {
            this.userService.logout();
            this.router.navigate(['/']);
          },
        },
      ],
    },
  ];

  changeTheme() {
    this.layoutService.toggleTheme();
  }
}
