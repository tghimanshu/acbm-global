import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * The root module of the Angular application.
 *
 * This module declares the root component (`AppComponent`) and imports
 * necessary modules such as `BrowserModule` for running in a browser
 * and `AppRoutingModule` for handling routing.
 *
 * It serves as the starting point for Angular's dependency injection
 * and component resolution.
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
