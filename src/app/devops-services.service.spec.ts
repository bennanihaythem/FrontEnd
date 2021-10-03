import { TestBed } from '@angular/core/testing';

import { DevopsServicesService } from './devops-services.service';

describe('DevopsServicesService', () => {
  let service: DevopsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
