import { Component } from '@angular/core';
import { Headers, Response } from '@angular/http';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
    // Do something with api
  }


  test() {
    let queryArr = [
      { val: 'test1' },
      { val: 'test2' },
      { val: 'test3' }
    ];

    this.makeRequest(queryArr).subscribe(
      () => {
        console.log('all requests finished');
      });
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('167ebff6-7efc-4232-9342-eff854d86edd:49b04b1e-bfdb-4e35-9679-991fac0162e9'));
  }

  makeRequest(queryArr, previousObservable) {
    if (queryArr.length) {
      let payload = JSON.stringify(queryArr[0]);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.createAuthorizationHeader(headers);

      queryArr.splice(0, 1);
      console.log('queryArr = ' + queryArr.length);

      var observable = null;
      if (previousObservable) {
        observable = previousObservable.flatMap(() => {
          return this.http.post('https://testsoapi.apispark.net/v1/entities', payload,{headers:headers})
            .map((res:Response) => res.json())
            .do(() => {
              console.log('request finished');
            });
        });
      } else {
        observable = this.http.post('https://testsoapi.apispark.net/v1/entities', payload, {
          headers:headers
        })
          .map((res:Response) => res.json())
          .do(() => {
            console.log('request finished');
          });
      }

      return this.makeRequest(queryArr, observable);
    } else {
      return previousObservable;
    }
  }
}
