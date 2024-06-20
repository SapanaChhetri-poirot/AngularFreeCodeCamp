import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

// hve removed appconfig from bootstrapapplication method to add httpclient, may need to add appconfig again
bootstrapApplication(AppComponent, {providers : [provideHttpClient(withFetch())]})
  .catch((err) => console.error(err));
