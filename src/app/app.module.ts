import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Sentry from '@sentry/browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { IconModule } from './icon/icon.module';
import { SentryErrorHandler } from './sentry-error-handler.service';
import { SvgsComponent } from './svgs/svgs.component';

const providers: Provider[] = [];

if (environment.production) {
  Sentry.init({
    dsn: 'https://c4806b4ac4114ff3b240bab7124a82c9@sentry.io/1492075',
  });

  providers.push({ provide: ErrorHandler, useClass: SentryErrorHandler });
}

@NgModule({
  declarations: [AppComponent, SvgsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    IconModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    // }),
  ],
  providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
