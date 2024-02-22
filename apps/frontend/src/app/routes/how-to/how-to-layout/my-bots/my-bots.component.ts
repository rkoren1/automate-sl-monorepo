import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-my-bots',
    templateUrl: './my-bots.component.html',
    styleUrls: ['./my-bots.component.scss'],
    standalone: true,
    imports: [MatCard, MatCardContent],
})
export class MyBotsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
