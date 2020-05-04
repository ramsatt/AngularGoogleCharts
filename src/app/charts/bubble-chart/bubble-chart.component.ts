import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit, AfterViewInit {
  @ViewChild('bubbleChart') bubbleChart: ElementRef;
  drawChart = () => {
    const data = google.visualization.arrayToDataTable([
      ['ID', 'X', 'Y', 'Temperature'],
      ['',   80,  167,      120],
      ['',   79,  136,      130],
      ['',   78,  184,      50],
      ['',   72,  278,      230],
      ['',   81,  200,      210],
      ['',   72,  170,      100],
      ['',   68,  477,      80]
    ]);

    const options = {
      title: 'Bubble Chart',
      colorAxis: {colors: ['yellow', 'red']}
    };

    const chart = new google.visualization.BubbleChart(this.bubbleChart.nativeElement);
    chart.draw(data, options);
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
