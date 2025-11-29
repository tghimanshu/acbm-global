import { Component } from '@angular/core';

/**
 * The root component of the application.
 *
 * This component acts as the main container for the application's UI.
 * It is bootstrapped by the `AppModule` and rendered in the `index.html` file
 * where the `<app-root>` selector is placed.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * The title of the application.
   *
   * This property is typically used in the template to display the app's name
   * or page title.
   */
  title = 'acbm-global';
}
