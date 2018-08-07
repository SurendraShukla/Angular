import { Component }   from '@angular/core';

@Component({
  template: `
  <h2 highlight="skyblue">About</h2>
  <p>All about this sample</p>
  `,
  styleUrls: ['../shared/styles.css']
})
export class AboutComponent {
  constructor() {
    console.log('inside AboutComponent');
  }

}

