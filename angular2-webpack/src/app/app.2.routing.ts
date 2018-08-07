import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome/backend', loadChildren: 'app/backend/backend.module' }
];

export const routing = RouterModule.forRoot(routes);
