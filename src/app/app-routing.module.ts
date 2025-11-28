import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Defines the routes for the application.
 *
 * Currently, the routes array is empty, but this is where
 * paths and their corresponding components would be defined.
 */
const routes: Routes = [];

/**
 * The routing module for the application.
 *
 * This module configures the router with the defined routes and exports
 * the `RouterModule` to be used throughout the application.
 *
 * It utilizes `RouterModule.forRoot(routes)` to initialize the routing
 * mechanism for the root of the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
