import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from 'main/@core';
import { NgFor, KeyValuePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';

@Component({
    selector: 'app-translate',
    template: `
    <button
      mat-icon-button
      class="matero-toolbar-button"
      [matMenuTriggerFor]="menu"
    >
      <mat-icon>translate</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <button
        mat-menu-item
        *ngFor="let lang of langs | keyvalue"
        (click)="useLanguage(lang.key)"
      >
        <span>{{ lang.value }}</span>
      </button>
    </mat-menu>
  `,
    styles: [],
    standalone: true,
    imports: [
        MatIconButton,
        MatMenuTrigger,
        MatIcon,
        MatMenu,
        NgFor,
        MatMenuItem,
        KeyValuePipe,
    ],
})
export class TranslateComponent {
  langs = {
    'en-US': 'English',
    'zh-CN': '中文简体',
    'zh-TW': '中文繁体',
  };

  constructor(
    private translate: TranslateService,
    private settings: SettingsService
  ) {
    translate.addLangs(['en-US', 'zh-CN', 'zh-TW']);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.settings.setLanguage(language);
  }
}
