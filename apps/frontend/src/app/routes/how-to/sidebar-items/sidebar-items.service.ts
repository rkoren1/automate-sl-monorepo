import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarItemsService {
  menu$ = of([
    {
      route: '/',
      name: 'menu.dashboard',
      type: 'link',
      icon: 'dashboard',
    },
    {
      route: 'dashboard/',
      name: 'menu.my-bots',
      type: 'sub',
      icon: 'person',
      children: [
        {
          route: 'powergiga1-Resident',
          name: 'powergiga1',
          type: 'link',
        },
        {
          route: 'KaneFox-Resident',
          name: 'KaneFox',
          type: 'link',
        },
      ],
    },
    {
      route: 'dashboard/',
      name: 'menu.shared-bots',
      type: 'sub',
      icon: 'people',
      children: [],
    },
  ]);
  constructor() {}

  /** Delete empty values and rebuild route. */
  buildRoute(routeArr: string[]): string {
    let route = '';
    routeArr.forEach((item) => {
      if (item && item.trim()) {
        route += '/' + item.replace(/^\/+|\/+$/g, '');
      }
    });
    return route;
  }
}
