import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { DapTeamComponent } from './dap-team/dap-team.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { QuoteComponent } from './quote/quote.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';
import { WikipediaService } from './wikipedia-search/wikipedia-search.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DapTeamComponent,
    TeamMemberComponent,
    QuoteComponent,
    WikipediaSearchComponent
  ],
  providers: [
    ApiService,
    WikipediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // displayDiv1 new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
