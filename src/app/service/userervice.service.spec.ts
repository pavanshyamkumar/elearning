import { TestBed } from '@angular/core/testing';

import { UsererviceService } from './userervice.service';

describe('UsererviceService', () => {
  let service: UsererviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsererviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
