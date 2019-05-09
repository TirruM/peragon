import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSideNavbarComponent } from './buyer-side-navbar.component';

describe('BuyerSideNavbarComponent', () => {
  let component: BuyerSideNavbarComponent;
  let fixture: ComponentFixture<BuyerSideNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerSideNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
