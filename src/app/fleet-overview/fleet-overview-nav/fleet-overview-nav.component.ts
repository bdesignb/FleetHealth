import { Component, Input } from '@angular/core';
import { FleetSummaryData } from 'src/app/models/fleetData';

@Component({
  selector: 'app-fleet-overview-nav',
  templateUrl: './fleet-overview-nav.component.html',
  styleUrls: ['./fleet-overview-nav.component.css']
})
export class FleetOverviewNavComponent {
  @Input() fleetSummaryData?: FleetSummaryData[];
}
