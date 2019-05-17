import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHistoryComponent } from './seller-history.component';

describe('SellerHistoryComponent', () => {
  let component: SellerHistoryComponent;
  let fixture: ComponentFixture<SellerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
