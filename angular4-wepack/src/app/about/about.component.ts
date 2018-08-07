import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private _userAgent: any;
  
  get userAgent(): any {
    return this._userAgent;
  }

  constructor(private api: ApiService ) {

    this.api.getIPAddress().then((res) => {
      let response = res.json();
      console.log('Hii ' + response.origin);
    });

    this.api.getUserAgent()
      .subscribe(res => {
        console.log(res);
      this._userAgent = res['user-agent'];
    });

    this.api.getWikiSearchResult('car').subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
