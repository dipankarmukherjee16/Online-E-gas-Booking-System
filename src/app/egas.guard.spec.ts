import { TestBed, async, inject } from '@angular/core/testing';

import { EgasGuard } from './egas.guard';

describe('EgasGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EgasGuard]
    });
  });

  it('should ...', inject([EgasGuard], (guard: EgasGuard) => {
    expect(guard).toBeTruthy();
  }));
});
