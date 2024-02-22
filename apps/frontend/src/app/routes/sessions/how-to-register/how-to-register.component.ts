import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { MatStepper, MatStep, MatStepLabel } from '@angular/material/stepper';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-how-to-register',
    templateUrl: './how-to-register.component.html',
    styleUrls: ['./how-to-register.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardTitle,
        MatCardContent,
        MatStepper,
        MatStep,
        MatStepLabel,
        RouterLink,
        TranslateModule,
    ],
})
export class HowToRegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
