import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { LINE_CHART_COLORS} from '../../shared/chart.colors';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
    // Array of different segments in chart
    lineChartData: ChartDataSets[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' },
      { data: [100, 59, 20, 67, 99, 12, 86], label: 'Product C'}
    ];
  
    //Labels shown on the x-axis
    lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
    // Define chart options
    lineChartOptions: ChartOptions = {
      responsive: true
    };
  
    // Define colors of chart segments
    lineChartColors = LINE_CHART_COLORS;
  
    // Set true to show legends
    lineChartLegend = true;
  
    // Define type of chart
    lineChartType = 'line';

  ngOnInit(): void {
  }

}
