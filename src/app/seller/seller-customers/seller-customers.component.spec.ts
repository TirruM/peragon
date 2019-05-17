import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCustomersComponent } from './seller-customers.component';

describe('SellerCustomersComponent', () => {
  let component: SellerCustomersComponent;
  let fixture: ComponentFixture<SellerCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
