import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit, AfterViewInit {
  @ViewChild('gaugeChart') gaugeChart: ElementRef;
  drawChart = () => {
    const data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68]
    ]);

    const options = {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom: 75, yellowTo: 90,
      minorTicks: 5
    };
    const chart = new google.visualization.Gauge(this.gaugeChart.nativeElement);
    chart.draw(data, options);
    setInterval(() => {
      data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
      chart.draw(data, options);
    }, 13000);
    setInterval(() => {
      data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
      chart.draw(data, options);
    }, 5000);
    setInterval(() => {
      data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
      chart.draw(data, options);
    }, 26000);
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['gauge']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
