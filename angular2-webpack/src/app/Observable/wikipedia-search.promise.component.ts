import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service.promise';

@Component({
  selector: 'wikipedia-search',
  template: `
    <div>
      <h2>Wikipedia Search</h2>
      <input #term type="text" (keyup)="search(term.value)">
      <ul>
        <li *ngFor="let item of items">{{item}}</li>
      </ul>
    </div>  
  `
})
export class WikipediaSearchPromiseComponent {
  items: Array<string>;

  constructor(private wikipediaService: WikipediaService) {}

  search(term) {
    this.wikipediaService.search(term).then(items => this.items = items);
  }
}

// http://plnkr.co/edit/8ap1Lm?p=preview
