import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkOrderModalComponent } from './work-order-modal.component';


describe('WorkOrderDialogComponent', () => {
  let component: WorkOrderModalComponent;
  let fixture: ComponentFixture<WorkOrderModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrderModalComponent]
    });
    fixture = TestBed.createComponent(WorkOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
