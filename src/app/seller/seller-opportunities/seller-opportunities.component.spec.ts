import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerOpportunitiesComponent } from './seller-opportunities.component';

describe('SellerOpportunitiesComponent', () => {
  let component: SellerOpportunitiesComponent;
  let fixture: ComponentFixture<SellerOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
