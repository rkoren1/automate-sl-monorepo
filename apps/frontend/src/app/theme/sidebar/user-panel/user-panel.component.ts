import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';
import { User } from '../../../core/authentication/interface';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
})
export class UserPanelComponent implements OnInit {
  private readonly auth = inject(AuthService);

  user!: User;

  ngOnInit(): void {
    this.auth.user().subscribe((user) => (this.user = user));
  }
}
