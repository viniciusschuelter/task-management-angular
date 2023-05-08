import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
