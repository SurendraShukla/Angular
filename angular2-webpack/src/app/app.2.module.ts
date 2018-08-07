import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { App2Component }  from './app.2.component';
import { WelcomeModule } from './welcome/welcome.module';
import { routing }       from './app.2.routing';

@NgModule({
  imports: [
    BrowserModule,
    WelcomeModule,
    routing
  ],
  declarations: [ App2Component ],
  bootstrap:    [ App2Component ]
})
export class App2Module { }
