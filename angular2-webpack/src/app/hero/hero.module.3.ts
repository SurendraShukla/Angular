import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { routing }             from './hero.routing.3';

@NgModule({
  imports: [ CommonModule, FormsModule, routing ],
  declarations: [
  ]
})
export class Hero3Module { }
