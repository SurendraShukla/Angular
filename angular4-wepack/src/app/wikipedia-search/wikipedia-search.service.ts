import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class WikipediaService {

  constructor(
    // private http: Http,
    private jsonp: Jsonp
  ) {}
  //
  // search(term: string): Observable<any> {
  //   // let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=2&namespace=0&format=json&search=car';
  //   return this.http.get('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + term)
  //     .map((request) => request.json());
  // }

  searchThroughJsonNP(term: string): Observable<any> {
    return this.jsonp.get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK&action=opensearch&format=json&search=' + term)
      .map((request) => request.json()[1]);

  //   let search = new URLSearchParams();
  //   search.set('action', 'opensearch');
  //   search.set('search', term);
  //   search.set('format', 'json');
  //   return this.jsonp
  //     .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
  //     .map((request) => request.json()[1]);

  }


}


