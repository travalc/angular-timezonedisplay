import { Component } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  currentDate : Date;
  convertedDate : string;
  
  constructor()
  {
    this.currentDate = new Date();
  }

  retreiveDate(timezone: string)
  {
    var zone : string;
    switch(timezone)
    {
      case 'pst':
        zone = 'America/Los_Angeles';
        break;
      case 'mst':
        zone = 'America/Denver';
        break;
      case 'cst':
        zone = 'America/Chicago';
        break;
      case 'est':
        zone = 'America/New_York';
    }
    this.convertedDate = moment(this.currentDate).tz(zone).format('LLL');
    console.log(this.convertedDate);
  }

  clearDate()
  {
    this.convertedDate = '';
  }

}
