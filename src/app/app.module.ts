import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaChartComponent,
    BarChartComponent,
    PieChartComponent,
    ColumnChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
