import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerQuotationsComponent } from './seller-quotations.component';

describe('SellerQuotationsComponent', () => {
  let component: SellerQuotationsComponent;
  let fixture: ComponentFixture<SellerQuotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerQuotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
