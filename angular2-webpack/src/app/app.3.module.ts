import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

/* App Root */
import { App3Component }       from './app.3.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';

/* Feature Modules */
import { ContactModule }      from './contact/contact.module.3';
import { routing }            from './app.3.routing';

@NgModule({
  imports:      [
    BrowserModule,
    ContactModule,
    routing
  ],
  providers:    [ UserService ],
  declarations: [ App3Component, HighlightDirective, TitleComponent ],
  bootstrap:    [ App3Component ]
})
export class App3Module { }

