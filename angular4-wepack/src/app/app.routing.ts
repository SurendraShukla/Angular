import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DapTeamComponent } from './dap-team/dap-team.component';
import { QuoteComponent } from './quote/quote.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'dap-team', component: DapTeamComponent},
  { path: 'quote', component: QuoteComponent},
  { path: 'wiki', component: WikipediaSearchComponent}
];

export const routing = RouterModule.forRoot(routes);
