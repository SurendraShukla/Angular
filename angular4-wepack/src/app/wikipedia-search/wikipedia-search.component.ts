import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { WikipediaService } from './wikipedia-search.service';

@Component({
  selector: 'my-wikipedia-search',
  templateUrl: './wikipedia-search.component.html'
})
export class WikipediaSearchComponent implements OnInit {

  itemsObservable: Observable<Array<string>>;
  termCtrl = new FormControl();

  itemsArray: Array<string>;
  termStr = '';

  constructor(private wikipediaService: WikipediaService) {}

  ngOnInit() {
    this.itemsObservable = this.termCtrl.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.wikipediaService.searchThroughJsonNP(term));

    this.itemsObservable.subscribe( response => {
      console.log(response);
      this.itemsArray = response;
    });
  }



  getSearchResult(term) {
    // console.log(term);
    this.wikipediaService.searchThroughJsonNP(term)
      .subscribe((response) => {
        this.itemsArray = response;
        console.log(response);
    });
  }

}
