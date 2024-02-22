import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HowToLayoutComponent } from './how-to-layout/how-to-layout.component';

@Component({
    selector: 'app-how-to',
    templateUrl: './how-to.component.html',
    styleUrls: ['./how-to.component.scss'],
    standalone: true,
    imports: [HowToLayoutComponent, RouterOutlet],
})
export class HowToComponent {}
