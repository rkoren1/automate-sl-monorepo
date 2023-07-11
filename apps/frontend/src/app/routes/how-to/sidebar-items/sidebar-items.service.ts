import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarItemsService {
  menu$ = of([
    {
      route: '/howto/register',
      name: 'Register',
      type: 'link',
      icon: 'fa-solid fa-user-plus',
    },
    {
      route: '/',
      name: 'Add Bot',
      type: 'sub',
      icon: 'fa-solid fa-users-line',
      children: [
        {
          route: '/howto/my-bots',
          name: 'Add your own bot',
          icon: 'fa-solid fa-user-tie',
          type: 'link',
        },
        {
          route: '/howto/shared-bots',
          name: 'Add shared bot',
          type: 'link',
        },
      ],
    },
    {
      route: '/howto/packages',
      name: 'Packages',
      type: 'link',
      icon: 'fa-solid fa-cubes',
    },
    {
      route: '/howto/discord-chat-relay',
      name: 'Discord chat relay',
      type: 'link',
      icon: 'fa-brands fa-discord',
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
