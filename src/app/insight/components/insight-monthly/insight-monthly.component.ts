import { Component, OnInit } from '@angular/core';
import { InsightService } from 'src/app/service/insight/insight.service';
import { ActivatedRoute } from '@angular/router';
import { Month } from '../insight-select-month/insight-select-month.component';

const date = new Date();

@Component({
  selector: 'app-insight-monthly',
  templateUrl: './insight-monthly.component.html',
  styleUrls: ['./insight-monthly.component.scss']
})
export class InsightMonthlyComponent implements OnInit {

  this_month = date.getMonth() + 1;
  month: string = (date.getMonth() + 1).toString();
  month_name = new Month(this._acRoute.snapshot.paramMap.get('month'))

  selected_month: number = date.getMonth() + 1;

  constructor(private _insightService: InsightService, private _acRoute: ActivatedRoute) { }
  credit_amounts: number[] = [];
  debit_amounts: number[] = [];
  balance: number[] = [];
  debit_individual_amounts: number[] = [];
  credit_individual_amounts: number[] = [];
  days: string[] = [];
  display: boolean = false;

  public lineChartData: Array<any> = [
    { data: [], label: 'Credit' },
    { data: [], label: 'Debit' },
    { data: [], label: 'Balance' },
    { data: [], label: 'Credit Individual', hidden: true },
    { data: [], label: 'Debit Individual', hidden: true }
  ];
  public lineChartLabels: Array<any> = this.days;
  public lineChartOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0.1, // disables bezier curves
      },
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    title: {
      display: true,
      text: 'Insights of ' + this.month_name.name
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
    },// animation duration after a resize
  };
  public lineChartColors: Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(184, 190, 198,0.3)',
      borderColor: 'rgba(40, 155, 142,1)',
      pointBackgroundColor: 'rgba(40, 155, 142,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(40, 155, 142,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(184, 190, 198,0.3)',
      borderColor: 'rgba(211, 19, 19,1)',
      pointBackgroundColor: 'rgba(226, 129, 129,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(226, 129, 129,0.8)'
    },
    {
      borderColor: 'rgba(165, 0, 156, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(226, 129, 129,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(117, 170, 255,0.1)',
      borderColor: 'rgba(66, 134, 244,1)',
      pointBackgroundColor: 'rgba(66, 134, 244,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(66, 134, 244,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(0, 0, 0,0.1)',
      borderColor: 'rgba(0, 0, 0,1)',
      pointBackgroundColor: 'rgba(0, 0, 0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 0, 0,0.8)'
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  ngOnInit() {
    console.log(this.month_name.name);
    this._acRoute.paramMap.subscribe(
      (value) => {
        this.month = value.get('month');
      }
    )
    this._insightService.getInsightMonthly(this.month)
      .subscribe(
        (response) => {
          for (const data of response) {
            this.credit_amounts.push(data.credit);
            this.debit_amounts.push(data.debit);
            this.balance.push(data.balance);
            this.credit_individual_amounts.push(data.credit_individual);
            this.debit_individual_amounts.push(data.debit_individual);
            this.days.push(data.day);
          }
          this.lineChartData = [
            { data: this.credit_amounts, label: 'Credit', fill: '-1' },
            { data: this.debit_amounts, label: 'Debit', fill: '-1' },
            { data: this.balance, label: 'Balance', borderDash: [5, 5], fill: false },
            { data: this.credit_individual_amounts, label: 'Credit Individual', hidden: true },
            { data: this.debit_individual_amounts, label: 'Debit Individual', hidden: true }
          ]
          this.lineChartLabels = this.days;
          this.display = true;
        }
      )
  }
}
