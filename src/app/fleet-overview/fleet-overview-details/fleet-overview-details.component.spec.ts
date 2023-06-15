import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetOverviewDetailsComponent } from './fleet-overview-details.component';

describe('FleetOverviewDetailsComponent', () => {
  let component: FleetOverviewDetailsComponent;
  let fixture: ComponentFixture<FleetOverviewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetOverviewDetailsComponent]
    });
    fixture = TestBed.createComponent(FleetOverviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
