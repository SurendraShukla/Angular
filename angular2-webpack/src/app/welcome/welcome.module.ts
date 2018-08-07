import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent }  from './welcome.component';
import { routing } from './welcome.routing';

@NgModule({
  imports: [ CommonModule, routing ],
  entryComponents : [ WelcomeComponent ],
  declarations: [ WelcomeComponent ]
})
export class WelcomeModule { }
