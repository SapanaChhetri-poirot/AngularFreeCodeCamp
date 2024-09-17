import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { requestInterceptor } from './request.interceptor';
import { InitService } from './init.service';

function initFactory(initService: InitService){
  return () => initService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideClientHydration(),
     {
        provide: APP_INITIALIZER,
        useFactory: initFactory,
        deps: [InitService],
        multi: true,
     },
      provideHttpClient(), {provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG},
      // provideHttpClient(withInterceptorsFromDi()), 
      // {
      //   provide: HTTP_INTERCEPTORS,
      //   useClass:requestInterceptor,
      //   multi:true
      // },
      provideHttpClient(withInterceptors([requestInterceptor])),
    ]
  };
 