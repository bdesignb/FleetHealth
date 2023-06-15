import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetOverviewNavComponent } from './fleet-overview-nav.component';

describe('FleetOverviewNavComponent', () => {
  let component: FleetOverviewNavComponent;
  let fixture: ComponentFixture<FleetOverviewNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetOverviewNavComponent]
    });
    fixture = TestBed.createComponent(FleetOverviewNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
