import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  title = '';

  constructor(private http: Http,
              private jsonp: Jsonp
  ) {
  }

  getIPAddress(): Promise<Response> {
    return this.http.get('https://httpbin.org/ip').toPromise();
  }

  getUserAgent(): Observable<any> {
    return this.http.get('https://httpbin.org/user-agent')
      .map( response => response.json() );
  }

  getWikiSearchResult(keyword): Observable<any> {
    return this.jsonp.get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK&action=opensearch&format=json&search=' + keyword)
      .map(response => response.json());
  }

}
