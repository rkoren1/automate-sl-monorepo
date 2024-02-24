import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/authentication/auth.service';
import { User } from '../../../core/authentication/interface';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
    selector: 'app-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.scss'],
    standalone: true,
    imports: [
        MatIconButton,
        RouterLink,
        MatIcon,
    ],
})
export class UserPanelComponent implements OnInit {
  user!: User;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user().subscribe((user) => (this.user = user));
  }

  logout() {
    this.auth
      .logout()
      .subscribe(() => this.router.navigateByUrl('/auth/login'));
  }
}
