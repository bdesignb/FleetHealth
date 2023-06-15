import { Component, Input } from '@angular/core';
import { FleetDetails } from 'src/app/models/fleetData';

@Component({
  selector: 'app-fleet-overview-details',
  templateUrl: './fleet-overview-details.component.html',
  styleUrls: ['./fleet-overview-details.component.css']
})
export class FleetOverviewDetailsComponent {
  @Input() fleetDetails?: FleetDetails[];

  addLeadingZero(number: number): string {
    let transformedNumber = number.toString().padStart(2, '0');
    return transformedNumber;
  }
}
