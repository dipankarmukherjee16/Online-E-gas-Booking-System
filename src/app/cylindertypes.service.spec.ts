import { TestBed } from '@angular/core/testing';

import { CylindertypesService } from './cylindertypes.service';

describe('CylindertypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CylindertypesService = TestBed.get(CylindertypesService);
    expect(service).toBeTruthy();
  });
});
