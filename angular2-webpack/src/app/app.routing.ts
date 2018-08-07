import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full'},
  { path: 'home/:id/:name', component: HomeComponent, pathMatch: 'prefix'}
];

export const routing = RouterModule.forRoot(routes);
