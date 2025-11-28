/**
 * The entry point for the Angular application.
 *
 * This file is responsible for bootstrapping the root module (`AppModule`)
 * to launch the application in the browser environment.
 *
 * It uses `platformBrowserDynamic` to compile the application in the browser
 * and then bootstraps the `AppModule`. Any errors during the bootstrap process
 * are caught and logged to the console.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
