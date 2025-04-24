import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(fr.default);
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
