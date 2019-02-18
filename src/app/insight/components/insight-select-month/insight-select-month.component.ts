import { Component, OnInit } from '@angular/core';

const date = new Date();

export class Month {
  month: string;
  name: string;
  constructor(month: string) {
    if (month === '1') this.name = 'January';
    else if (month === '2') this.name = 'February';
    else if (month === '3') this.name = 'March';
    else if (month === '4') this.name = 'April';
    else if (month === '5') this.name = 'May';
    else if (month === '6') this.name = 'June';
    else if (month === '7') this.name = 'July';
    else if (month === '8') this.name = 'August';
    else if (month === '9') this.name = 'September';
    else if (month === '10') this.name = 'October';
    else if (month === '11') this.name = 'November';
    else if (month === '12') this.name = 'December';

    this.month = month;
  }
}

@Component({
  selector: 'app-insight-select-month',
  templateUrl: './insight-select-month.component.html',
  styleUrls: ['./insight-select-month.component.scss']
})
export class InsightSelectMonthComponent implements OnInit {

  this_year = date.getFullYear();
  this_month = new Month((date.getMonth() + 1).toString());

  all_months = [
    new Month('1'), 
    new Month('2'), 
    new Month('3'),
    new Month('4'), 
    new Month('5'), 
    new Month('6'), 
    new Month('7'), 
    new Month('8'), 
    new Month('9'), 
    new Month('10'), 
    new Month('11'), 
    new Month('12')
  ]

  constructor() { }

  ngOnInit() {
  }

}
