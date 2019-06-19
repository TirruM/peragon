import { TestBed } from '@angular/core/testing';

import { PerogonServices } from './perogon-services.service';

describe('PerogonServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerogonServices = TestBed.get(PerogonServices);
    expect(service).toBeTruthy();
  });
});
