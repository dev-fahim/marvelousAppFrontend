import { Component, OnInit } from '@angular/core';
import { InsightService } from 'src/app/service/insight/insight.service';

const date = new Date();

@Component({
  selector: 'app-insight-yearly',
  templateUrl: './insight-yearly.component.html',
  styleUrls: ['./insight-yearly.component.scss']
})
export class InsightYearlyComponent implements OnInit {

  constructor(private _insightService: InsightService) { }
  credit_amounts: number[] = [];
  debit_amounts: number[] = [];
  months: string[] = [];

  public lineChartData: Array<any> = [
    { data: [], label: 'Credit' },
    { data: [], label: 'Debit' }
  ];
  public lineChartLabels: Array<any> = this.months;
  public lineChartOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0, // disables bezier curves
      },
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      animationDuration: 0,
      intersect: true
    },
    title: {
      display: true,
      text: 'Insights of ' + date.getFullYear()
    },
    scales: {
      yAxes: [{
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return value + ' Tk.';
          }
        },
        scaleLabel: {
          display: true,
          labelString: 'Credit & Debit Amount'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }]
    },
    animation: {
      duration: 0, // general animation time
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
  };
  public lineChartColors: Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(145, 255, 242,0.4)',
      borderColor: 'rgba(40, 155, 142,1)',
      pointBackgroundColor: 'rgba(40, 155, 142,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(40, 155, 142,1)'
    },
    { // grey
      backgroundColor: 'rgba(226, 129, 129,0.4)',
      borderColor: 'rgba(211, 19, 19,1)',
      pointBackgroundColor: 'rgba(226, 129, 129,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(226, 129, 129,0.8)'
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  ngOnInit() {
    this._insightService.getInsightYearly()
      .subscribe(
        (response) => {
          for (const data of response) {
            this.credit_amounts.push(data.credit);
            this.debit_amounts.push(data.debit);
            this.months.push(data.month);
          }
          this.lineChartData = [
            { data: this.credit_amounts, label: 'Credit' },
            { data: this.debit_amounts, label: 'Debit' }
          ]
        }
      )
  }

}
