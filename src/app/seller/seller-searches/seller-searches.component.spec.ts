import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSearchesComponent } from './seller-searches.component';

describe('SellerSearchesComponent', () => {
  let component: SellerSearchesComponent;
  let fixture: ComponentFixture<SellerSearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
