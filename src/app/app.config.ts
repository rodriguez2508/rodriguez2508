import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, withHttpTransferCacheOptions, withIncrementalHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideZonelessChangeDetection(),
    // provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      routes,
      withViewTransitions()
      // withDebugTracing()
    ),
    provideClientHydration(withEventReplay()),
    provideClientHydration(
      withEventReplay(),
      withIncrementalHydration(),
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
     provideBrowserGlobalErrorListeners(),
  ]
};
