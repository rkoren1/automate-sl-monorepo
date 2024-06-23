import { enableProdMode, importProvidersFrom } from '@angular/core';

import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core/core.module';
import { appInitializerProviders } from './app/core/initializers';
import {
  BASE_URL,
  httpInterceptorProviders,
} from './app/core/interceptors/index';
import { FormlyConfigModule } from './app/formly-config.module';
import { RoutesModule } from './app/routes/routes.module';
import { SharedModule } from './app/shared/shared.module';
import { environment } from './environments/environment';

// Required for AOT compilation
function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      CoreModule,
      RoutesModule,
      SharedModule,
      FormlyConfigModule.forRoot(),
      NgxPermissionsModule.forRoot(),
      ToastrModule.forRoot(),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: TranslateHttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
    { provide: BASE_URL, useValue: environment.baseUrl },
    httpInterceptorProviders,
    appInitializerProviders,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
