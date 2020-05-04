import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss']
})
export class OrganizationChartComponent implements OnInit, AfterViewInit {
  @ViewChild('orgChart') orgChart: ElementRef;
  drawChart = () => {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');
    data.addColumn('string', 'ToolTip');

    // For each orgchart box, provide the name, manager, and tooltip to show.
    data.addRows([
      [{v: 'Sathish Kumar', f: 'Sathish Kumar<div style="color:red; font-style:italic">President</div>'},
        '', 'The President'],
      [{v: 'Ramalingam', f: 'Ramalingam<div style="color:red; font-style:italic">Vice President</div>'},
        'Sathish Kumar', 'VP'],
      ['Kamal', 'Sathish Kumar', ''],
      ['Kolanji Nathan', 'Ramalingam', ''],
      ['Silambarasan', 'Kolanji Nathan', '']
    ]);

    data.setRowProperty(2, 'selectedStyle', 'background-color:#581845');
    data.setRowProperty(3, 'style', 'border: 1px solid green');

    // Create the chart.
    const chart = new google.visualization.OrgChart(this.orgChart.nativeElement);
    // Draw the chart, setting the allowHtml option to true for the tooltips.
    chart.draw(data, {allowHtml: true});
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['orgchart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
