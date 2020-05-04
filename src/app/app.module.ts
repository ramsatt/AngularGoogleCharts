import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ChartListComponent } from './charts/chart-list/chart-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BubbleChartComponent } from './charts/bubble-chart/bubble-chart.component';
import { GeoChartComponent } from './charts/geo-chart/geo-chart.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { WordTreesComponent } from './charts/word-trees/word-trees.component';
import { OrganizationChartComponent } from './charts/organization-chart/organization-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartListComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    BubbleChartComponent,
    GeoChartComponent,
    GaugeChartComponent,
    DonutChartComponent,
    AreaChartComponent,
    WordTreesComponent,
    OrganizationChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
