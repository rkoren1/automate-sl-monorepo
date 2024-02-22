import { Component, Input } from '@angular/core';
import { SidebarItemsService } from './sidebar-items.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { NavAccordionToggleDirective } from '../../../theme/sidemenu/nav-accordion-toggle.directive';
import { MatRipple } from '@angular/material/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NavAccordionItemDirective } from '../../../theme/sidemenu/nav-accordion-item.directive';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NavAccordionDirective } from '../../../theme/sidemenu/nav-accordion.directive';
import { NgTemplateOutlet, NgFor, NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-sidebar-items',
    templateUrl: './sidebar-items.component.html',
    styleUrls: ['./sidebar-items.component.scss'],
    standalone: true,
    imports: [
        NgTemplateOutlet,
        NavAccordionDirective,
        NgFor,
        NgxPermissionsModule,
        NavAccordionItemDirective,
        RouterLinkActive,
        NgIf,
        MatRipple,
        RouterLink,
        NavAccordionToggleDirective,
        MatIcon,
        AsyncPipe,
        TranslateModule,
    ],
})
export class SidebarItemsComponent {
  @Input() ripple = true;

  menu$ = this.sidebarItemsService.menu$;

  buildRoute = this.sidebarItemsService.buildRoute;

  constructor(private sidebarItemsService: SidebarItemsService) {}
}
