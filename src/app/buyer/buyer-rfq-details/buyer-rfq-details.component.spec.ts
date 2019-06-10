import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRfqDetailsComponent } from './buyer-rfq-details.component';

describe('BuyerRfqDetailsComponent', () => {
  let component: BuyerRfqDetailsComponent;
  let fixture: ComponentFixture<BuyerRfqDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerRfqDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerRfqDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
