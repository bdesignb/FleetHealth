import { ModalService } from 'src/app/services/modal.service';
import { FleetOverviewService } from './../../services/fleet-overview.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FleetData } from 'src/app/models/fleetData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fleet-overview',
  templateUrl: './fleet-overview.component.html',
  styleUrls: ['./fleet-overview.component.css'],
  providers: [FleetOverviewService, ModalService]
})
export class FleetOverviewComponent implements OnInit, OnDestroy{
  private subscription?: Subscription;
  fleetData?: FleetData;

  constructor(private fleetService: FleetOverviewService, public modalService: ModalService) {}

  ngOnInit() {
    this.subscription = this.fleetService.getFleetData().subscribe(data => {
      this.fleetData = data;
    });
  }

  openModal() {
    this.modalService.openModal();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
