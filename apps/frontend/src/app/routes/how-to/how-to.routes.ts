import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { DiscordBotSetupComponent } from './how-to-layout/discord-bot-setup/discord-bot-setup.component';
import { HowToPackagesComponent } from './how-to-layout/how-to-packages/how-to-packages.component';
import { HowToRegisterComponent } from './how-to-layout/how-to-register/how-to-register.component';
import { MyBotsComponent } from './how-to-layout/my-bots/my-bots.component';
import { SharedBotsComponent } from './how-to-layout/shared-bots/shared-bots.component';
import { HowToWelcomeComponent } from './how-to-welcome/how-to-welcome.component';
import { HowToComponent } from './how-to.component';

export const howToRoutes: Routes = [
  {
    path: '',
    component: HowToComponent,
    children: [
      {
        path: '',
        component: HowToWelcomeComponent,
      },
      {
        path: 'discord-chat-relay',
        component: DiscordBotSetupComponent,
      },
      {
        path: 'packages',
        component: HowToPackagesComponent,
      },
      {
        path: 'register',
        component: HowToRegisterComponent,
      },
      {
        path: 'my-bots',
        component: MyBotsComponent,
      },
      {
        path: 'shared-bots',
        component: SharedBotsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

bootstrapApplication(HowToComponent, {
  providers: [
    provideRouter(howToRoutes),
    importProvidersFrom(CommonModule, RouterModule),
  ],
});
