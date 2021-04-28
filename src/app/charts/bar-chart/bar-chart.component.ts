import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

    // Array of different segments in chart
    barChartData: ChartDataSets[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
    ];
  
    //Labels shown on the x-axis
    barChartLabels: Label[] = ['Arizona', 'Georgia', 'Florida'];
  
    // Define chart options
    barChartOptions: ChartOptions = {
      responsive: true
    };
  
    // Define colors of chart segments
    barChartColors: Color[] = [
  
      { // yellow
        backgroundColor: '#ffd166'
      },
      { // pink
        backgroundColor: '#ff6b6b'
      }
    ];
  
    // Set true to show legends
    barChartLegend = true;
  
    // Define type of chart
    barChartType = 'bar';

  ngOnInit(): void {
  }

}
