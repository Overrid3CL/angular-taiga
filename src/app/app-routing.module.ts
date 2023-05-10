import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LogInComponent } from './pages/auth/log-in/log-in.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';
import { EmptyComponent } from './layouts/empty/empty.component';
import { authGuard } from './helpers/auth.guard';
import { noAuthGuard } from './helpers/no-auth.guard';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { GeneralSettingsComponent } from './pages/dashboard/settings/general-settings/general-settings.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [noAuthGuard],
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LogInComponent },
    ],
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: '', redirectTo: '/settings/general', pathMatch: 'full' },
          { path: 'general', component: GeneralSettingsComponent },
        ],
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
