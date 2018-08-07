import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  url = 'https://github.com/preboot/angular2-webpack';
  title: string;
  imgUrl = '/img/angular.png';

  displayDiv1 = false;
  displayDiv2 = 'none';

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }

  toggle() {
    this.displayDiv1 = !this.displayDiv1;
    this.displayDiv2 = ('none' === this.displayDiv2) ? 'block' : 'none';
  }


}
