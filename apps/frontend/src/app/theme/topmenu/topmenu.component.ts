import {
  Component,
  HostBinding,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive, RouterLink } from '@angular/router';
import { Menu, MenuService } from 'main/@core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { TopmenuPanelComponent } from './topmenu-panel.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatAnchor, MatButton } from '@angular/material/button';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgFor, NgIf, NgTemplateOutlet, AsyncPipe } from '@angular/common';
import { MatTabNav } from '@angular/material/tabs';

export interface TopmenuState {
  active: boolean;
  route: string;
}

@Component({
    selector: 'app-topmenu',
    templateUrl: './topmenu.component.html',
    styleUrls: ['./topmenu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatTabNav,
        NgFor,
        NgxPermissionsModule,
        NgIf,
        MatAnchor,
        RouterLinkActive,
        RouterLink,
        NgTemplateOutlet,
        MatButton,
        MatMenuTrigger,
        TopmenuPanelComponent,
        MatIcon,
        AsyncPipe,
        TranslateModule,
    ],
})
export class TopmenuComponent implements OnDestroy {
  @HostBinding('class') class = 'matero-topmenu';

  menu$ = this.menu.getAll();

  buildRoute = this.menu.buildRoute;

  menuList: Menu[] = [];
  menuStates: TopmenuState[] = [];

  private menuSubscription = Subscription.EMPTY;
  private routerSubscription = Subscription.EMPTY;

  constructor(private menu: MenuService, private router: Router) {
    this.menuSubscription = this.menu$.subscribe((res) => {
      this.menuList = res;
      this.menuList.forEach((item) => {
        this.menuStates.push({
          active: this.router.url.split('/').includes(item.route),
          route: item.route,
        });
      });
    });
  }

  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  onRouteChange(rla: RouterLinkActive, index: number) {
    this.routerSubscription.unsubscribe();
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => {
        this.menuStates.forEach((item) => (item.active = false));
        setTimeout(() => (this.menuStates[index].active = rla.isActive));
      });
  }
}
