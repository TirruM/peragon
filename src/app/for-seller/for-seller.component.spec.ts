import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSellerComponent } from './for-seller.component';

describe('ForManufacturersComponent', () => {
  let component: ForSellerComponent;
  let fixture: ComponentFixture<ForSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForSellerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
