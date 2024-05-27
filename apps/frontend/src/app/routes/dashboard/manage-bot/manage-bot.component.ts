import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';
import { ILinkAccData } from '../../../shared/Models/bot.model';
import { DiscordSettingsInput } from '../../../shared/Models/discordSettings.model';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { UserService } from '../../../theme/widgets/user/user.service';
import { AccessCodePopupComponent } from './access-code-popup/access-code-popup.component';
import { BotSettingsPopupComponent } from './bot-settings-popup/bot-settings-popup.component';
import { DiscordSettingsPopupComponent } from './discord-settings-popup/discord-settings-popup.component';
import { ManageBotService } from './manage-bot.service';
import { StartupPopupComponent } from './startup-popup/startup-popup.component';
import { SubscriptionPopupComponent } from './subscription-popup/subscription-popup.component';

@Component({
  selector: 'app-manage-bot',
  templateUrl: './manage-bot.component.html',
  styleUrls: ['./manage-bot.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatCard,
    MatCardContent,
    MatCardTitle,
    DatePipe,
  ],
})
export class ManageBotComponent implements OnInit, OnDestroy {
  botData: ILinkAccData = {
    id: -1,
    loginFirstName: '',
    loginSpawnLocation: '',
    loginRegion: '',
    imageId: '00000000-0000-0000-0000-000000000000',
    subscriptions: [
      {
        subscriptionStart: '',
        subscriptionEnd: '',
        package: { packageName: '', id: -1 },
      },
    ],
  };
  firstName: string;
  lastName: string;
  subs = new SubSink();

  constructor(
    private route: ActivatedRoute,
    private manageBotService: ManageBotService,
    private dialog: MatDialog,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.subs.sink = this.route.paramMap.subscribe(() => {
      this.firstName = this.route.snapshot.params.id.split('-')[0];
      this.lastName = this.route.snapshot.params.id.split('-')[1];
      this.getBotConfiguration(this.firstName, this.lastName);
    });
  }

  private getBotConfiguration(firstName: string, lastName: string) {
    this.manageBotService
      .getBotConfiguration(firstName, lastName)
      .subscribe((res) => {
        this.botData = res;
        if (res.subscriptions.length === 0) {
          this.botData.subscriptions = [
            {
              subscriptionStart: '',
              subscriptionEnd: '',
              package: { packageName: '', id: -1 },
            },
          ];
        }
      });
  }

  startupPopup(botId: number) {
    this.dialog
      .open(StartupPopupComponent, {
        data: {
          loginSpawnLocation: this.botData.loginSpawnLocation,
          loginRegion: this.botData.loginRegion,
          botId: this.botData.id,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.getBotConfiguration(this.firstName, this.lastName);
      });
  }

  botAccessCodePopup(botId: number) {
    this.dialog.open(AccessCodePopupComponent);
  }

  discordSettingsPopup(botId: number) {
    const data: DiscordSettingsInput = {} as DiscordSettingsInput;
    this.manageBotService.getDiscordSettings(botId).subscribe((res) => {
      data.botId = botId;
      if (res.length > 0) {
        data.id = res[0].id;
        data.discChannelId = res[0].discChannelId;
        data.slGroupUuid = res[0].slGroupUuid;
        data.webHookUrl = res[0].webHookUrl;
      }
      this.dialog.open(DiscordSettingsPopupComponent, {
        data,
      });
    });
  }

  botSubscriptionPopup(botId: number) {
    this.dialog
      .open(SubscriptionPopupComponent, {
        data: {
          packageId: this.botData.subscriptions[0].package.id,
          package: this.botData.subscriptions[0].package.packageName,
          botId,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.userService.updateLDollarBalance.next(true);
        this.getBotConfiguration(this.firstName, this.lastName);
      });
  }

  botSettingsPopup(botId: number) {
    this.dialog.open(BotSettingsPopupComponent);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
