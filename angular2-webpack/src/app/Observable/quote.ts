import {Http} from '@angular/http';

@Component({
  selector: 'my-quote',
  template: `
  <div class="column">
    <div>
      <button (click)="addQuote()"> Add Quote </button>
    </div>
    <div *ngFor="#quote of qlist; #i=index" class="row">
      {{i}}. {{quote}}
    </div>
  </div>
  `
})
export class Quote {
  qlist: String[] = [];

  constructor (public http: Http) {
  }

  getQuote () {
    return this.http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
  }

  addQuote () {
    this.getQuote()
      .repeat(3)
      .map(res => res.json())
      .filter(res => res.length > 0)
      .map(res => res[0].content.replace(/\<.*?\>/g, ''))
      .subscribe(quote => {
        this.qlist.push(quote);
      }, e => console.log(e.message));
  }
}

// http://plnkr.co/edit/XiMzik?p=preview
