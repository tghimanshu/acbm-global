import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

/**
 * Unit tests for the `AppComponent`.
 *
 * These tests verify the basic functionality of the application's root component,
 * ensuring it creates successfully, has the correct title, and renders the expected content.
 */
describe('AppComponent', () => {
  /**
   * Setup logic to run before each test.
   *
   * Configures the testing module with necessary imports (`RouterTestingModule`)
   * and declarations (`AppComponent`), then compiles the components.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  /**
   * Verifies that the `AppComponent` instance is created successfully.
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * Verifies that the `title` property of the `AppComponent` is set to 'acbm-global'.
   */
  it(`should have as title 'acbm-global'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('acbm-global');
  });

  /**
   * Verifies that the component renders the title in the DOM.
   *
   * This test triggers change detection and then checks the text content
   * of the element matching `.content span` to ensure it contains the expected greeting.
   */
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('acbm-global app is running!');
  });
});
