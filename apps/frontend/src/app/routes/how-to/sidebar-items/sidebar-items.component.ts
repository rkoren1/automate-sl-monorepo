import { Component, Input } from '@angular/core';
import { SidebarItemsService } from './sidebar-items.service';

@Component({
  selector: 'app-sidebar-items',
  templateUrl: './sidebar-items.component.html',
  styleUrls: ['./sidebar-items.component.scss'],
})
export class SidebarItemsComponent {
  @Input() ripple = true;

  menu$ = this.sidebarItemsService.menu$;

  buildRoute = this.sidebarItemsService.buildRoute;

  constructor(private sidebarItemsService: SidebarItemsService) {}
}
