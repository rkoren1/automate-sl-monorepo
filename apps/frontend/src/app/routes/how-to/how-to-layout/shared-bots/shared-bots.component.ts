import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-shared-bots',
    templateUrl: './shared-bots.component.html',
    styleUrls: ['./shared-bots.component.scss'],
    standalone: true,
    imports: [MatCard, MatCardContent],
})
export class SharedBotsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
