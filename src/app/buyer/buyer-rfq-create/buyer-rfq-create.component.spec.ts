import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRfqCreateComponent } from './buyer-rfq-create.component';

describe('BuyerRfqCreateComponent', () => {
  let component: BuyerRfqCreateComponent;
  let fixture: ComponentFixture<BuyerRfqCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerRfqCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerRfqCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
