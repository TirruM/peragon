import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqDashboardComponent } from './rfq-dashboard.component';

describe('RfqDashboardComponent', () => {
  let component: RfqDashboardComponent;
  let fixture: ComponentFixture<RfqDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfqDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
