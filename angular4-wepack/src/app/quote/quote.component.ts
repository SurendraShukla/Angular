import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'my-quote',
  templateUrl: './quote.component.html'
})
export class QuoteComponent {
  qlist: String[] = [];

  constructor (public http: Http) {
  }

  getQuote () {
    return this.http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
  }

  addQuote () {
    this.getQuote()
      .repeat(5)
      .map(res => res.json())
      .filter(res => res.length > 0)
      .map(res => res[0].content.replace(/\<.*?\>/g, ''))
      .subscribe(quote => {
        console.log(quote);
        this.qlist.push(quote);
      }, e => console.log( ':' + e));
  }
}

// http://plnkr.co/edit/XiMzik?p=preview
