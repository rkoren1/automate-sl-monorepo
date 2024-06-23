import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { PreloaderService } from './core/bootstrap/preloader.service';
import { SettingsService } from './core/bootstrap/settings.service';

// eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
declare var gtag: any;

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
    standalone: true,
    imports: [RouterOutlet],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private preloader: PreloaderService,
    private settings: SettingsService,
    router: Router,
  ) {
    const navEndEvent$: Observable<NavigationEnd> = router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtag('config', 'G-QPGSZQQ76X', { page_path: e.urlAfterRedirects });
    });
  }

  ngOnInit() {
    this.settings.setDirection();
    this.settings.setTheme();
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
