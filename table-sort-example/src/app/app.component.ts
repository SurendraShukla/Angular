import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Displaying all posts!!!';
  noOfRowsToDisplay = 50;

  public data: any[];

  constructor(private appService: AppService) {
    appService.getUserDetails().subscribe( result => {
      this.data = result;
    });
  }

}
