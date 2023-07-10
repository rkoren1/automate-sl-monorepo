import { Component } from '@angular/core';
import { SettingsService } from 'main/@core';

@Component({
  selector: 'app-how-to-layout',
  templateUrl: './how-to-layout.component.html',
  styleUrls: ['./how-to-layout.component.scss'],
})
export class HowToLayoutComponent {
  options = this.settings.getOptions();

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
