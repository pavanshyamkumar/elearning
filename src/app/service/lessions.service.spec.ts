import { TestBed } from '@angular/core/testing';

import { LessionsService } from './lessions.service';

describe('LessionsService', () => {
  let service: LessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
