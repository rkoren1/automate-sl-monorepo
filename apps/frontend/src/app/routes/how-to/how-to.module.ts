import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ThemeModule } from '../../theme/theme.module';
import { DiscordBotSetupComponent } from './how-to-layout/discord-bot-setup/discord-bot-setup.component';
import { HowToLayoutComponent } from './how-to-layout/how-to-layout.component';
import { HowToPackagesComponent } from './how-to-layout/how-to-packages/how-to-packages.component';
import { HowToRegisterComponent } from './how-to-layout/how-to-register/how-to-register.component';
import { MyBotsComponent } from './how-to-layout/my-bots/my-bots.component';
import { SharedBotsComponent } from './how-to-layout/shared-bots/shared-bots.component';
import { HowToComponent } from './how-to.component';
import { SidebarItemsComponent } from './sidebar-items/sidebar-items.component';

const routes: Routes = [
  {
    path: '',
    component: HowToComponent,
    children: [
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

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        ThemeModule,
        HowToComponent,
        HowToLayoutComponent,
        DiscordBotSetupComponent,
        SidebarItemsComponent,
        HowToRegisterComponent,
        HowToPackagesComponent,
        MyBotsComponent,
        SharedBotsComponent,
    ],
})
export class HowToModule {}
