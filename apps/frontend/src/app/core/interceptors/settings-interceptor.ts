import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from '../bootstrap/settings.service';
import { Observable } from 'rxjs';

@Injectable()
export class SettingsInterceptor implements HttpInterceptor {
  constructor(private settings: SettingsService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        headers: request.headers.append(
          'Accept-Language',
          this.settings.getLanguage()
        ),
      })
    );
  }
}
