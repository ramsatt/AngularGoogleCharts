import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('barChart') barChart: ElementRef;
  drawChart = () => {
    const data = google.visualization.arrayToDataTable([
      ['Element', 'Density', { role: 'style' } ],
      ['Copper', 8.94, '#581845'],
      ['Silver', 10.49, '#C70039'],
      ['Gold', 19.30, '#FFC300'],
      ['Platinum', 21.45, '#900C3F']
    ]);
    const options = {
      title: 'Bar Chart',
      width: 400,
      height: 250,
      bar: {groupWidth: '95%'},
      legend: { position: 'none' },
    };
    const view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      { calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation' },
      2]);
    const chart = new google.visualization.BarChart(this.barChart.nativeElement);
    chart.draw(view, options);
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
