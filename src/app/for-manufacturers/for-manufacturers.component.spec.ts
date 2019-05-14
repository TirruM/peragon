import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForManufacturersComponent } from './for-manufacturers.component';

describe('ForManufacturersComponent', () => {
  let component: ForManufacturersComponent;
  let fixture: ComponentFixture<ForManufacturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForManufacturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
