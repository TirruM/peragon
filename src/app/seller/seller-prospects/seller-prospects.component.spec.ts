import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProspectsComponent } from './seller-prospects.component';

describe('SellerProspectsComponent', () => {
  let component: SellerProspectsComponent;
  let fixture: ComponentFixture<SellerProspectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerProspectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
