import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'main/@shared';
import { ThemeModule } from 'main/@theme/theme.module';
import { DiscordBotSetupComponent } from './discord-bot-setup/discord-bot-setup.component';
import { HowToLayoutComponent } from './how-to-layout/how-to-layout.component';
import { HowToComponent } from './how-to.component';

const routes: Routes = [
  {
    path: '',
    component: HowToComponent,
    children: [
      {
        path: 'discord-setup',
        component: DiscordBotSetupComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ThemeModule,
  ],
  declarations: [
    HowToComponent,
    HowToLayoutComponent,
    DiscordBotSetupComponent,
  ],
})
export class HowToModule {}
