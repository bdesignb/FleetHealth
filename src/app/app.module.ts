import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FleetOverviewComponent } from './fleet-overview/fleet-overview/fleet-overview.component';
import { FleetOverviewNavComponent } from './fleet-overview/fleet-overview-nav/fleet-overview-nav.component';
import { FleetOverviewDetailsComponent } from './fleet-overview/fleet-overview-details/fleet-overview-details.component';
import { FleetLineChartComponent } from './fleet-overview/fleet-line-chart/fleet-line-chart.component';
import { ThousandsSeparatorPipe } from './pipes/thousands-separator.pipe';
import { WorkOrderModalComponent } from './fleet-overview/work-order-modal/work-order-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FleetOverviewComponent,
    FleetOverviewNavComponent,
    FleetOverviewDetailsComponent,
    FleetLineChartComponent,
    ThousandsSeparatorPipe,
    WorkOrderModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
