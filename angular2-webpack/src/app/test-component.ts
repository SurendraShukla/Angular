import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                <h1>{{title}}</h1>
                <h2>Hello {{name}}!</h2>
                <h3 class="welcome" ><i>{{welcome}}</i></h3>
                <button (click)="buttonClick();">{{name}}</button>
                `
})

export class TestComponent {
  @Input() name: string;

  // @Output myEventEmitter = new EventEmitter();
  //
  // buttonClick() {
  //     this.myEventEmitter.emit('hello');
  // }

}
