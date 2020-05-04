import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-word-trees',
  templateUrl: './word-trees.component.html',
  styleUrls: ['./word-trees.component.scss']
})
export class WordTreesComponent implements OnInit, AfterViewInit {
  @ViewChild('wordTreeChart') wordTreeChart: ElementRef;
  drawChart = () => {
    const data = google.visualization.arrayToDataTable(
      [ ['Phrases'],
        ['Sathish Knows HTML'],
        ['Sathish Knows Php'],
        ['Sathish Knows Angular 2'],
        ['Sathish Knows Angular 4'],
        ['Sathish Knows Angular 5'],
        ['Sathish Knows Angular 6'],
        ['Sathish Knows Angular 7'],
        ['Sathish Knows Angular 8'],
        ['Sathish Knows Angular 9'],
        ['Sathish Knows TS'],
        ['Sathish Knows JS'],
        ['Sathish Eat Dosa'],
        ['Sathish Eat Mutton Briyani'],
        ['Sathish Eat Chicken Briyani'],
        ['Sathish Eat Fish Briyani'],
        ['Sathish Eat Pizza'],
        ['Sathish Eat Chapathi'],
        ['Sathish Eat Pongal'],
        ['Sathish Traveled to Chennai'],
        ['Sathish Traveled to Goa'],
        ['Sathish Traveled to Trichy'],
      ]
    );

    const options = {
      wordtree: {
        format: 'implicit',
        word: 'Sathish'
      }
    };

    const chart = new google.visualization.WordTree(this.wordTreeChart.nativeElement);
    chart.draw(data, options);
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages:['wordtree']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
