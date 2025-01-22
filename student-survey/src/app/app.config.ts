// Authors: Mamatha Iruvaram and Adilakshmi Pratyusha Mothadaka
// Description: This Angular configuration (appConfig) sets up application-level providers for routing and change detection. It configures zone change detection with event coalescing to optimize performance, and provides the router with the defined routes for navigation within the app.
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // Now this should work correctly

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Configure zone change detection
    provideRouter(routes) // Provide the router with the defined routes
  ]
};