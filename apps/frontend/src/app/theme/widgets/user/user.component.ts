import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/authentication/auth.service';
import { User } from '../../../core/authentication/interface';
import { debounceTime, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    standalone: true,
    imports: [
        MatButton,
        MatMenuTrigger,
        MatMenu,
        RouterLink,
        MatMenuItem,
        MatIcon,
        TranslateModule,
    ],
})
export class UserComponent implements OnInit {
  user!: User;
  username: any;
  lDollarBalance = 0;

  constructor(
    private router: Router,
    private auth: AuthService,
    private cdr: ChangeDetectorRef,
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.callApiUpdateBalance();
    this.userService.updateLDollarBalance.subscribe((res) => {
      this.callApiUpdateBalance();
    });
    const tmp = localStorage.getItem('token') || '{}';
    this.username = JSON.parse(tmp);
    this.auth
      .user()
      .pipe(
        tap((user) => (this.user = user)),
        debounceTime(10)
      )
      .subscribe(() => this.cdr.detectChanges());
  }

  private callApiUpdateBalance() {
    this.userService.getLDollarBalance().subscribe((balance) => {
      this.lDollarBalance = balance.lDollarBalance;
      this.cd.detectChanges();
    });
  }

  logout() {
    this.auth
      .logout()
      .subscribe(() => this.router.navigateByUrl('/auth/login'));
  }
}
