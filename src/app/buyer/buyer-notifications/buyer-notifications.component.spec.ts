import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerNotificationsComponent } from './buyer-notifications.component';

describe('BuyerNotificationsComponent', () => {
  let component: BuyerNotificationsComponent;
  let fixture: ComponentFixture<BuyerNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
