import { Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
    selector: 'app-sidebar-notice',
    templateUrl: './sidebar-notice.component.html',
    standalone: true,
    imports: [MatTabGroup, MatTab],
})
export class SidebarNoticeComponent {}
