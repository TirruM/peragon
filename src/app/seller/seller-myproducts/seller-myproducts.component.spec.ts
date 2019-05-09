import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerMyproductsComponent } from './seller-myproducts.component';

describe('SellerMyproductsComponent', () => {
  let component: SellerMyproductsComponent;
  let fixture: ComponentFixture<SellerMyproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerMyproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerMyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
