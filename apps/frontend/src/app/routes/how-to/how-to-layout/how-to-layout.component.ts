import { Dir } from '@angular/cdk/bidi';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { NgProgressComponent } from 'ngx-progressbar';
import { SettingsService } from '../../../core/bootstrap/settings.service';
import { FooterComponent } from '../../../theme/footer/footer.component';
import { SidebarComponent } from '../../../theme/sidebar/sidebar.component';
import { SidebarItemsComponent } from '../sidebar-items/sidebar-items.component';

@Component({
  selector: 'app-how-to-layout',
  templateUrl: './how-to-layout.component.html',
  styleUrls: ['./how-to-layout.component.scss'],
  standalone: true,
  imports: [
    Dir,
    NgClass,
    NgProgressComponent,
    MatSidenavContainer,
    MatSidenav,
    SidebarComponent,
    SidebarItemsComponent,
    MatSidenavContent,
    FooterComponent,
  ],
})
export class HowToLayoutComponent {
  options = this.settings.options;

  constructor(private settings: SettingsService) {}

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  private isMobileScreen = false;
  private isCollapsedWidthFixed = false;
  private isContentWidthFixed = true;
  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
    this.options.sidenavOpened = isOpened;
    this.settings.setOptions(this.options);
  }
  toggleCollapsed() {
    this.isContentWidthFixed = false;
    this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
    this.resetCollapsedState();
  }
  resetCollapsedState(timer = 400) {
    setTimeout(() => this.settings.setOptions(this.options), timer);
  }
}
