import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { BrandingComponent } from '../widgets/branding.component';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
    BrandingComponent,
    MatSlideToggle,
    UserPanelComponent,
    SidemenuComponent
],
})
export class SidebarComponent {
  @Input() showToggle = true;
  @Input() showUser = true;
  @Input() showHeader = true;
  @Input() toggleChecked = false;
  @Input() showSideMenu = true;

  @Output() toggleCollapsed = new EventEmitter<void>();
}
