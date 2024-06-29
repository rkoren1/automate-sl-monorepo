import { Routes } from '@angular/router';
import { AuthGuard } from './core';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ManageBotComponent } from './routes/dashboard/manage-bot/manage-bot.component';
import { Error403Component } from './routes/sessions/403.component';
import { Error404Component } from './routes/sessions/404.component';
import { Error500Component } from './routes/sessions/500.component';
import { HowToRegisterComponent } from './routes/sessions/how-to-register/how-to-register.component';
import { LoginComponent } from './routes/sessions/login/login.component';
import { AdminLayoutComponent } from './theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './theme/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/:id', component: ManageBotComponent },
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
    ],
  },
  {
    path: 'howto',
    loadChildren: () =>
      import('./routes/how-to/how-to.routes').then((m) => m.howToRoutes),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: HowToRegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
