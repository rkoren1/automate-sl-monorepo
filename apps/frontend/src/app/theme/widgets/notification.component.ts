import { Component } from '@angular/core';
import { MatLine } from '@angular/material/core';

import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatMenuTrigger, MatMenu } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';

@Component({
    selector: 'app-notification',
    template: `
    <button mat-icon-button class="matero-toolbar-button" [matMenuTriggerFor]="menu">
      <mat-icon>notifications</mat-icon>
      <span class="badge bg-red-500">5</span>
    </button>
    
    <mat-menu #menu="matMenu">
      <mat-nav-list>
        @for (message of messages; track message) {
          <mat-list-item>
            <a matLine href="#">{{ message }}</a>
            <button mat-icon-button>
              <mat-icon>info</mat-icon>
            </button>
          </mat-list-item>
        }
      </mat-nav-list>
    </mat-menu>
    `,
    standalone: true,
    imports: [
    MatIconButton,
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    MatNavList,
    MatListItem,
    MatLine
],
})
export class NotificationComponent {
  messages = ['Server Error Reports', 'Server Error Reports', 'Server Error Reports'];
}
