import { TestBed, inject } from '@angular/core/testing';

import { DeactivateRouteService } from './deactivate-route.service';

describe('DeactivateRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateRouteService]
    });
  });

  it('should be created', inject([DeactivateRouteService], (service: DeactivateRouteService) => {
    expect(service).toBeTruthy();
  }));
});
