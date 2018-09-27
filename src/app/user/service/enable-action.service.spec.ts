import { TestBed, inject } from '@angular/core/testing';

import { EnableActionService } from './enable-action.service';

describe('EnableActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnableActionService]
    });
  });

  it('should be created', inject([EnableActionService], (service: EnableActionService) => {
    expect(service).toBeTruthy();
  }));
});
