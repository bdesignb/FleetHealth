import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetLineChartComponent } from './fleet-line-chart.component';

describe('FleetLineChartComponent', () => {
  let component: FleetLineChartComponent;
  let fixture: ComponentFixture<FleetLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetLineChartComponent]
    });
    fixture = TestBed.createComponent(FleetLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
