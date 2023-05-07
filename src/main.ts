import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/pages/login/login.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        // {
        //   path: 'home',
        //   loadComponent: () => PlaygroundComponent,
        //   canActivate: [() => isLogged()],
        // },
        // {
        //   path: 'dimension-c137',
        //   loadComponent: () => DimensionC137Component,
        //   canActivate: [() => isLogged()],
        // },
        // {
        //   path: 'lazy-renderer',
        //   loadComponent: () => LazyRendererComponent,
        //   canActivate: [() => isLogged()],
        // },
        {
          path: 'login',
          loadComponent: () => LoginComponent,
        },
        { path: '**', redirectTo: 'login', pathMatch: 'full' },
      ]
    ),
  ],
}).catch((err) => console.error(err));
