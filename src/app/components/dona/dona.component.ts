import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {
  @Input() title: string = 'Sin Titulo';
  @Input() labels: string[] = [];
  @Input() data: ChartConfiguration<'doughnut'>['data']['datasets'] = [];

  public doughnutChartLabels: string[] = ['download', 'In store', 'Mail store'];

  public doughnutChartData: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 350, 450, 100 ] }
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

}
