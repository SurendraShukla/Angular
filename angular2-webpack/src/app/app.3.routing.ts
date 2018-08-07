import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  // { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'crisis', loadChildren: () => new Promise(function (resolve) {
    (require as any).ensure([], function (require: any) {
      resolve(require('app/crisis/crisis.module')['CrisisModule']);
    });
  }) },
  { path: 'heroes', loadChildren: 'app/hero/hero.module.3#HeroModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

