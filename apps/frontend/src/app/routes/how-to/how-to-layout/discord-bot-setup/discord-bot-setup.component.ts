import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-discord-bot-setup',
    templateUrl: './discord-bot-setup.component.html',
    styleUrls: ['./discord-bot-setup.component.scss'],
    standalone: true,
    imports: [MatCard, MatCardContent],
})
export class DiscordBotSetupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
