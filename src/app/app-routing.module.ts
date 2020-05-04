import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartListComponent} from './charts/chart-list/chart-list.component';
import {PieChartComponent} from './charts/pie-chart/pie-chart.component';
import {BarChartComponent} from './charts/bar-chart/bar-chart.component';
import {LineChartComponent} from './charts/line-chart/line-chart.component';
import {BubbleChartComponent} from './charts/bubble-chart/bubble-chart.component';
import {GeoChartComponent} from './charts/geo-chart/geo-chart.component';
import {GaugeChartComponent} from './charts/gauge-chart/gauge-chart.component';
import {DonutChartComponent} from './charts/donut-chart/donut-chart.component';
import {AreaChartComponent} from './charts/area-chart/area-chart.component';
import {WordTreesComponent} from './charts/word-trees/word-trees.component';
import {OrganizationChartComponent} from './charts/organization-chart/organization-chart.component';


const routes: Routes = [
  {path: '', component: ChartListComponent},
  {path: 'pie', component: PieChartComponent},
  {path: 'bar', component: BarChartComponent},
  {path: 'line', component: LineChartComponent},
  {path: 'bubble', component: BubbleChartComponent},
  {path: 'geo', component: GeoChartComponent},
  {path: 'gauge', component: GaugeChartComponent},
  {path: 'donut', component: DonutChartComponent},
  {path: 'area', component: AreaChartComponent},
  {path: 'word', component: WordTreesComponent},
  {path: 'org', component: OrganizationChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
