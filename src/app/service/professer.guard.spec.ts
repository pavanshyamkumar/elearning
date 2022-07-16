import { TestBed } from '@angular/core/testing';

import { ProfesserGuard } from './professer.guard';

describe('ProfesserGuard', () => {
  let guard: ProfesserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfesserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
