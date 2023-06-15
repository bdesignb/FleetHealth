import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-work-order-modal',
  templateUrl: './work-order-modal.component.html',
  styleUrls: ['./work-order-modal.component.css']
})
export class WorkOrderModalComponent {

  constructor(public modalService: ModalService) { }

  closeModal(): void {
    this.modalService.closeModal();
  }

}
