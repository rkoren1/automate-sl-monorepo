import { Component, ViewEncapsulation, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';


@Component({
    selector: 'error-code',
    templateUrl: './error-code.component.html',
    styleUrls: ['./error-code.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
    MatAnchor,
    RouterLink
],
})
export class ErrorCodeComponent {
  @Input() code = '';
  @Input() title = '';
  @Input() message = '';
}
