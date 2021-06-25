import { TestBed } from '@angular/core/testing';

import { GasbookingService } from './gasbooking.service';

describe('GasbookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GasbookingService = TestBed.get(GasbookingService);
    expect(service).toBeTruthy();
  });
});
