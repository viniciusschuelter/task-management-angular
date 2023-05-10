import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';

const routes: Route[] = [
  {
    path: 'workspace',
    loadComponent: () => WorkspaceComponent,
  },
  {
    path: 'login',
    loadComponent: () => LoginComponent,
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
