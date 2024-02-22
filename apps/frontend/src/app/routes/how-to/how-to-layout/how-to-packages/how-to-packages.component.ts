import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-how-to-packages',
    templateUrl: './how-to-packages.component.html',
    styleUrls: ['./how-to-packages.component.scss'],
    standalone: true,
    imports: [MatCard, MatCardContent],
})
export class HowToPackagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
