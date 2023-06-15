import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  isModalOpen = false;
  modalStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  openModal() {
    this.isModalOpen = true;
    this.modalStatusChange.emit(this.isModalOpen);
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalStatusChange.emit(this.isModalOpen);
  }
}
