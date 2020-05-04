import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.scss']
})
export class GeoChartComponent implements OnInit, AfterViewInit {
  @ViewChild('geoChart') geoChart: ElementRef;
  drawChart = () => {
    const data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700],
      ['India', 900]
    ]);

    const options = {
      title: 'Geo Chart',
      width: 400,
      height: 300
    };
    const chart = new google.visualization.GeoChart(this.geoChart.nativeElement);
    chart.draw(data, options);
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    google.charts.load('current', {
      packages: ['geochart'],
      mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
