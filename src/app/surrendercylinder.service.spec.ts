import { TestBed } from '@angular/core/testing';

import { SurrendercylinderService } from './surrendercylinder.service';

describe('SurrendercylinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurrendercylinderService = TestBed.get(SurrendercylinderService);
    expect(service).toBeTruthy();
  });
});
